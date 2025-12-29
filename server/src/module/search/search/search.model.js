import mongoose from "mongoose";
import product from "../product/product.model";

const searchSchema= new mongoose.Schema({
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        trim: true,
        required: true
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        trim: true,
        required: true
    },
    supplier: {
        type: mongoose.Types.ObjectId,
        ref: "Supplier",
        trim: true,
        required: true
    },
},
 { timestamps: true }
)
export default mongoose.model("Search", searchSchema);