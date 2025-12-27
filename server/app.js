import express from "express";
import errorMiddleware from "./src/middleware/error.middleware.js";
import userRoute from "./src/module/user/user.route.js";
import productRoute from "./src/module/product/product.route.js";
import categoryRoute from "./src/module/category/category.route.js";

const app = express();
const router = express.Router();

router.use("/user", userRoute); 
router.use("/product", productRoute); 
router.use("/category", categoryRoute); 

app.use(errorMiddleware);

export default router;