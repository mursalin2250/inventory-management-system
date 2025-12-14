import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required:  true
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "supplier", "manager", "staff"],
    },
    refreshtoken: {
        type: String
    }

}, {timestamps: true});

const user = mongoose.model("User", userSchema);

export default user;
