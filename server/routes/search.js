import express from "express";
import { searchBoarding } from "../controllers/search.js";

const router = express.Router();

router.post("/", searchBoarding);

export default router;
