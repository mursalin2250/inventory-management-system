import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique : true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    contact: {
        type: String,
        unique: true,
        required:  true,
        trim : true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    buyingPrice:{
        type: Number,
        required: true
    }
}, {timestamps: true});

const supplier= mongoose.model("Supplier", supplierSchema);

export default supplier;
 