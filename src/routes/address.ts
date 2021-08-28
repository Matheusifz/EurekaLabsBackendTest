import express from "express";
import axios from "axios";
import { IAddress, PTAddress } from "../interfaces/address";
import Address from "../models/Address";

const router = express.Router();

router.get("/api/address", async (req, res) => {
  try {
    const searchedCep = req.query.cep;
    const addresses = await Address.find({ cep: searchedCep });

    if (addresses.length > 0) {
      return res.status(200).json({ addresses });
    } else {
      const address = await axios
        .get<PTAddress>(`https://viacep.com.br/ws/${searchedCep}/json/`)
        .then((response) => response.data);

      if (!addresses) {
        return res.status(200).json({ message: "Sorry, cep not found" });
      } else {
        const { cep, ibge, gia, ddd } = address;
        const newAddress: IAddress = {
          cep,
          state: address.uf,
          neighborhood: address.bairro,
          city: address.localidade,
          street: address.logradouro,
          ibge,
          gia,
          ddd,
          adjunct: address.complemento,
        };

        const createdAddress = new Address(newAddress);
        return res.status(200).json({ address: await createdAddress.save() });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json("Sorry, server error...");
  }
});

export { router as addressRouter };
