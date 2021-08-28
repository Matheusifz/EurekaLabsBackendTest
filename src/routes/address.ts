import express from "express";
import { IAddress } from "../interfaces/address";
import Address from "../models/Address";

const router = express.Router();

router.get("/api/address", async (req, res) => {
  try {
    const addresses = await Address.find();
    return res.status(200).json({ addresses });
  } catch (error) {
    console.log(error);
    return res.status(400).json('Sorry, server error...');
  }
});

router.post("/api/address", async (req, res) => {
  try {
    const { cep ,state, neighborhood, city, street, ibge, gia, ddd, adjunct } =
      req.body;

    const newAddress: IAddress = {
      cep,
      state,
      neighborhood,
      city,
      street,
      ibge,
      gia,
      ddd,
      adjunct,
    };

    const address = new Address(newAddress);

    const createdAddress = await address.save();

    return res.status(200).json({ address: createdAddress });
  } catch (error) {
    console.log(error);
    return res.status(400).json("Sorry, server error...");
  }
});

export { router as addressRouter };
