import express from "express";

import { register, login, logout } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
//router.post("/checkOwner", checkOwner);

export default router;
