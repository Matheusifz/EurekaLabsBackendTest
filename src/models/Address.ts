import mongoose, { Schema } from "mongoose";

const AddressSchema = new Schema({
  cep: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  ibge: {
    type: String,
    required: true,
  },
  gia: {
    type: String,
    required: true,
  },
  ddd: {
    type: String,
    required: true,
  },
  adjunct: {
    type: String,
    required: false,
  },
});

const Address = mongoose.model("addresses", AddressSchema);

export default Address;
