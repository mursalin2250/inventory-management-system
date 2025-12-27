import mongoose from "mongoose";

const categoryModel = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    code: {
       type: String,
       trim: true,
       required: true,
       unique: true
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        required: true
    }
}, {timestamps: true});

const category = mongoose.model("Category", categoryModel);
export default category;