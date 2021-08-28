import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { addressRouter } from "./routes/address";

const app = express();
app.use(json());
app.use(cors());
app.use(addressRouter);

mongoose
  .connect(
    "mongodb+srv://matheusifz:sabrina07@cluster0.iezls.mongodb.net/CEP?retryWrites=true&w=majority",
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
