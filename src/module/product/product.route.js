import express from "express";
import { createProduct, viewAllProduct, viewProduct } from "./product.controller.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", viewAllProduct);
router.get("/", viewProduct);

export default router;
