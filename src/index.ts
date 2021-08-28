import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { addressRouter } from "./routes/address";

const app = express();
app.use(json());
app.use(cors());
app.use(addressRouter);
dotenv.config()


const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;



mongoose
  .connect(
    `mongodb+srv://${user}:${password}@cluster0.iezls.mongodb.net/CEP?retryWrites=true&w=majority`,
    {}
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.listen(3333, () => {
  console.log("Server is Listening on port 3333");
});
