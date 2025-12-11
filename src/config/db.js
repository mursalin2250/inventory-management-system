import mongoose from "mongoose";
import {MONGO_URI} from "./envConfig.js";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connection successful!");
    } catch (error) {
        console.error(error);
    }
}

export default connectDB;
