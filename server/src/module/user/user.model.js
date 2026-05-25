import mongoose from "mongoose";

<<<<<<< HEAD
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
=======
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
        enum: ["admin", "user", "manager", "staff"],
        default: "user"
    },
    refreshtoken: {
        type: String
    },
    otp:{
        type: String
    },
    otpExpireTime:{
        type: Date
    }

}, {timestamps: true});

const user = mongoose.model("User", userSchema);

export default user;
 
>>>>>>> 7103fd16d8e6f1bc917a4951486c1e75c9bbdf3c
