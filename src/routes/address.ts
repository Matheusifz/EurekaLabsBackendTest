import express from "express";

const router = express.Router();

router.get("/api/address", (req, res) => {
  return res.send("Get the address");
});

router.post("/api/address", (req, res) => {
  return res.send("Register address on database");
});

export { router as addressRouter };
