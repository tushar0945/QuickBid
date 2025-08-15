// routes/slideRoutes.js
import express from "express";
import Slide from "../models/Slide.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const slides = await Slide.find();
  res.json(slides);
});

export default router;
