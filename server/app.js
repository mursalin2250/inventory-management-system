import express from "express";
import userRoute from "./src/module/user/user.route.js";

const router = express.Router();

router.use("/v01/user", userRoute);

export default router;
