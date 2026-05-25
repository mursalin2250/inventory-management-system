import express from "express";
<<<<<<< HEAD
import userRoute from "./src/module/user/user.route.js";

const router = express.Router();

router.use("/v01/user", userRoute);

export default router;
=======
import errorMiddleware from "./src/middleware/error.middleware.js";
import userRoute from "./src/module/user/user.route.js";
import productRoute from "./src/module/product/product.route.js";
import categoryRoute from "./src/module/category/category.route.js";
import supplierRoute  from "./src/module/supplier/supplier.route.js";
import searchRoute from './src/module/search/search.route.js'

const app = express();
const router = express.Router();

router.use("/user", userRoute); 
router.use("/product", productRoute); 
router.use("/category", categoryRoute);
router.use("/supplier",supplierRoute)
router.use("/search",searchRoute)

app.use(errorMiddleware);

export default router;
>>>>>>> 7103fd16d8e6f1bc917a4951486c1e75c9bbdf3c
