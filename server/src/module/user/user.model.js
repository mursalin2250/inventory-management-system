import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: true
        },
        lastName: {
            type: String,
            trim: true,
            required: true
        },
        // username: {
        //     type: String,
        //     trim: true,
        //     required: true,
        //     unique: true
        // },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            enum: ["admin", "staff"],
            default: "staff"
        },
        refreshToken: {
            type: String
        },
        otp: {
            type: String
        },
        otp_expire_time: {
            type: String
        }

    }
,{timestamps: true});

const user = mongoose.model("User", userSchema);

export default user;