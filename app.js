import express from "express";
import userRoute from "./src/module/user/user.route.js";
import errorMiddleware from "./src/middleware/error.middleware.js";

const app = express();
const router = express.Router();

router.use("/user", userRoute);

app.use(errorMiddleware);

export default router;