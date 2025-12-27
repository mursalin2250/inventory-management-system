import express from "express";
import userRoute from "./src/module/user/user.route.js";
import productRoute from "./src/module/product/product.route.js";
import errorMiddleware from "./src/middleware/error.middleware.js";

const app = express();
const router = express.Router();

router.use("/user", userRoute); 
router.use("/product", productRoute); 

app.use(errorMiddleware);

export default router;