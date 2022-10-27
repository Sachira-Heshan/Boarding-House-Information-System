import express from "express";
import { getOwners, getOwner } from "../controllers/owner.js";

const router = express.Router();

router.get("/", getOwners);
router.get("/:id", getOwner);

export default router;
