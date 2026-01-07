import mongoose from "mongoose";


const searchSchema= new mongoose.Schema({
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
    },
    supplier: {
        type: mongoose.Types.ObjectId,
        ref: "Supplier",
    },
},
 { timestamps: true }
)
export default mongoose.model("Search", searchSchema);