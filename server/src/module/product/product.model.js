import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
       type: String,
       trim: true,
       required: true 
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        required: true
    },
    sku: {
        type: String,
        required: true,
        unique: true
    }

}, {timestamps: true});

const product = mongoose.model("Product", productModel);
export default product;