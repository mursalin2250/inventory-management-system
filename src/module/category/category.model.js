import mongoose, { mongo } from "mongoose";

const categoryModel = new mongoose.Schema({
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
        type: mongoose.Types.ObjectId,
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

});

const category = mongoose.model("Category", categoryModel);
export default category;