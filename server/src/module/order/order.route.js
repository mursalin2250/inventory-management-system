import express from "express";
const router = express.Router();

import {
  createOrder,
  getAllOrder,
  getOrderById,
  updateOrderStatus,
  getOrderSummary
} from "../controllers/orderController.js";

router.post("/", createOrder);
router.get("/", getAllOrder);
router.get("/summary", getOrderSummary);
router.get("/:id", getOrderById);
router.patch("/:id", updateOrderStatus);

export default router;
