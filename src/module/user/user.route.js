import express from "express";
import { createUser, loginUser, getUser, getAccessToken, updateUser, changePassword } from "./user.controller.js";
import { authenticate, authorize, authorizeAdmin } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.post("/token", getAccessToken);
router.get("/", authenticate, authorize, getUser);
router.put("/", authenticate, updateUser);
router.post("/change-password", authenticate, changePassword);


export default router; 