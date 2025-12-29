import crypto from "crypto";
import userModel from "./user.model.js";
import { comparePassword, hashPassword } from "../../utils/password.js";
import { accessToken, refreshToken, verifyToken } from "../../utils/jwt.js";
import { OTP_VALID_TIME_LIMIT } from "../../config/envConfig.js";

export const createUserService = async (data) => {
    const {name, username, email, password, role} = data;
    const userExists = await userModel.findOne({username});
    const emailExists = await userModel.findOne({email}); 
    
    if(userExists){
        throw new Error("The username is already in use!");
    }else if(emailExists){
        throw new Error("The email is already in use!");
    }

    const hashedPassword = await hashPassword(password);
    const user = await userModel.create({name, username, email, password: hashedPassword, role});

    const newAccessToken = accessToken(user._id, username, role);
    const newRefreshToken = refreshToken(user._id);

    user.refreshtoken = newRefreshToken;
    user.save();

    const createdUser = user.toObject();
    
    delete createdUser.password;
    delete createdUser.__v;
    return {createdUser, newAccessToken};
}

export const loginUserService = async (data) => {
    const user = await userModel.findOne({$or: [{username: data.username}, {email: data.email}]});
    
    if(!user) throw new Error("Invalid Credentials");
    
    await comparePassword(data.password, user.password);
    
    const newAccessToken = accessToken(user._id, user.username, user.role);
    const newRefreshToken = refreshToken(user._id);

    user.refreshtoken = newRefreshToken;
    await user.save();

    const newUser = user.toObject();
    delete newUser.__v;
    delete newUser.password;
    delete newUser.refreshtoken;

    return {user: newUser, accessToken: newAccessToken, refreshToken: newRefreshToken};
}

export const accessTokenService = async (refreshToken) => {
    const token = verifyToken(refreshToken);
    const user = await userModel.findById(token.id);

    if(!user || user.refreshtoken !== refreshToken) throw new Error("Invalid user token!");

    const newAccessToken = accessToken(user.id, user.username, user.role);

    return newAccessToken;
}

export const getUserService = async (data) => {
    const user = await userModel.findOne({$or : [{username: data.username}, {email: data.email}]});
    if(!user) throw new Error("User not found!");

    const returnUser = user.toObject();
    delete returnUser.__v;
    delete returnUser.password;
    delete returnUser.refreshtoken;
    delete returnUser.role;

    return returnUser;
}

export const getAllUsersService = async () => {
    const users = await userModel.find().select("-__v -password -refreshtoken -otp -otpExpireTime");
    return users;
}

export const updateUserService = async (filter, data) => {
    const user = await userModel.findOneAndUpdate({$or : [{username: filter.username}, {email: filter.email}]}, data, {new: true});
    if(!user) throw new Error("User not found!");

    return user;
}

export const changePasswordService = async (user_id,data) => {
    const user = await userModel.findById(user_id);
    const {currentPassword, newPassword, confirmPassword} = data;
    
    if(!user){
        throw new Error("Invalid User!");
    }

    await comparePassword(currentPassword, user.password);

    if(newPassword !== confirmPassword){
        throw new Error("Passwords didn't match");
    }

    const newHashPassword = await hashPassword(newPassword);
    user.password = newHashPassword;
    await user.save();
}

export const deleteUserService = async (user_id, data) => {
    const user = await userModel.findOne({_id: user_id});

    if(!user){
        throw new Error("User not found!");
    }

    await comparePassword(data.password, data.confirmPassword);

    const deletedUser = await userModel.findOneAndDelete(user_id);
    console.log(deletedUser)
    
    const deleteUser = deletedUser.toObject();
        
    delete deleteUser.__v;
    delete deleteUser.password;
    delete deleteUser.refreshtoken;
    delete deleteUser.role;

    return deleteUser;
}

export const logOutUserService = async (id, data) => {
    const user = await userModel.findOne({_id: id});
    if(!user) {
        throw new Error("User not found!");
    }
    
};

export const forgetPasswordService = async (id) => {
    const user = await userModel.findOne({_id: id}).select("-password ");

    if(!user) {
        throw new Error("User not found!");
    }

    const generateOTP = crypto.randomInt(100000, 1000000).toString();
    const OTPValidityTime = Date.now() + OTP_VALID_TIME_LIMIT *60 * 1000;
    user.otp = generateOTP;
    user.otpExpireTime = OTPValidityTime;
    user.save();

    return {user};
}

