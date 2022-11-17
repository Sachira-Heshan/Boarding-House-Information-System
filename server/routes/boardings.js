import express from "express";
import {
  addBoarding,
  getBoardings,
  getBoarding,
  deleteBoarding,
  updateBoarding,
  searchBoarding,
} from "../controllers/boarding.js";

const router = express.Router();

router.get("/", getBoardings);
router.get("/:id", getBoarding);
router.get("/search", searchBoarding);
router.post("/", addBoarding);
router.delete("/:id", deleteBoarding);
router.put("/:id", updateBoarding);

export default router;
