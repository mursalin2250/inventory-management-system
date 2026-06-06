import userModel from "./user.model.js";
import bcrypt from "bcrypt";
import {accesstoken, refreshToken} from "../../utils/jwt.js";

export const getAllUserService = async () => {
    const user = await userModel.find().select("-__v -password -refreshToken");
    return {users: user};
}

export const createUserService = async (data) => {
    const {firstName, lastName, email, password, role} = data;

    // const userExists = await userModel.findOne({username});
    const emailExists = await userModel.findOne({email});

    // if(userExists){
    //     throw new Error("This username is already in use!");
    // } else 
    if(emailExists){
        throw new Error("This email is already in use!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({firstName, lastName, email, password: hashedPassword, role});

    const newAccessToken = accesstoken(user._id, role);
    const newRefreshToken = refreshToken(user._id);

    user.refreshToken = newRefreshToken;
    await user.save();

    const newUser = user.toObject();
    delete newUser.__v;
    delete newUser.password;

    return{user: newUser, accessToken: newAccessToken};
}

export const loginUserService = async (data) => {
    const user = await userModel.findOne({email: data.email});
    if (!user) throw new Error("Invalid credentials!"); 

    const password = await bcrypt.compare(data.password, user.password);
    if(!password) throw new Error("Invalid credentials!");

    const newAccessToken = accesstoken(user._id, user.role);
    const newRefreshToken = refreshToken(user._id);

    user.refreshToken = newRefreshToken;
    await user.save();

    const newUser = user.toObject();
    delete newUser.__v;
    delete newUser.password;
    delete newUser.refreshToken;

    return {user: newUser, accessToken: newAccessToken, refreshToken: newRefreshToken};

}
