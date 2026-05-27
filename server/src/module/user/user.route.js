import express from "express";
import {getAllUser, createUser, loginUser} from "./user.controller.js";

const router = express.Router();

router.get("/", getAllUser);
router.post("/", createUser);
router.post("/login", loginUser);

export default router;

