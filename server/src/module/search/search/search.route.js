import express from "express";
import { universalSearchController } from "./search.controller.js";

const router = express.Router();

router.get("/search", universalSearchController);

export default router;
