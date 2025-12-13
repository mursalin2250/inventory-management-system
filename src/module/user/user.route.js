import express from "express";
import { createUser, loginUser, getUser, getAccessToken } from "./user.controller.js";
import { authenticate, authorizeAdmin } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.post("/token", getAccessToken);
router.get("/", authenticate, authorizeAdmin, getUser);


export default router; 