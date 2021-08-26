import express from "express";
import { json } from "body-parser";
import { addressRouter } from "./routes/address";
import mongoose from "mongoose";

const app = express();
app.use(json());
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

app.listen(3000, () => {
  console.log("Server is Listening on port 3000");
});
