import express from "express";
import { json } from "body-parser";
import { addressRouter } from "./routes/address";


const app = express();
app.use(json());
app.use(addressRouter);

app.listen(3000, () => {
  console.log("Server is Listening on port 3000");
});
