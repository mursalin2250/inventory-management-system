import express from "express";
import { createCategory, viewAllCategory, viewCategory } from "./category.controller.js";

const router = express.Router();

router.post("/", createCategory);
router.get("/", viewAllCategory);
router.get("/", viewCategory);

export default router;
