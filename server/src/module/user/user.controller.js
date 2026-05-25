<<<<<<< HEAD
import {getAllUserService, createUserService, loginUserService} from "./user.service.js";
import generateResponse from "../../utils/generateResponse.js";

export const getAllUser = async (req, res) => {
    try {
        const user = await getAllUserService();
        res.status(200).json(generateResponse(true, 200, "all users fetched successfully!", user));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}
=======
import { 
    accessTokenService, 
    changePasswordService, 
    createUserService, 
    deleteUserService, 
    forgetPasswordService, 
    getAllUsersService, 
    getUserService, 
    loginUserService, 
    logOutUserService, 
    updateUserService 
} from "./user.service.js";
>>>>>>> 7103fd16d8e6f1bc917a4951486c1e75c9bbdf3c

export const createUser = async (req,res) => {
    try {
        const user = await createUserService(req.body);
<<<<<<< HEAD
        res.status(201).json(generateResponse(true, 201, "user created successfully!", user));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const loginUser = async (req, res) => {
    try {
        const user = await loginUserService(req.body);
        res.status(200).json(generateResponse(true, 200, "user login successful!", user));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
=======
        res.status(201).json({message: "User created successfully!", user});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

export const loginUser = async (req,res) => {
    try {
        const user = await loginUserService(req.body);
        res.status(200).json({message: "User login successful!", userInfo: user});
    } catch (error) {
        console.log(error)
        res.status(401).json({message: error.message});
    }
}

export const getAccessToken = async (req, res) => {
    try {
        const newAccessToken = await accessTokenService(req.body.refreshToken);
        res.status(200).json({message: "Token generated successfully!", newAccessToken});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

export const getUser = async (req,res) => {
    try {
        const user = await getUserService(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message});
    }
}

export const getAllUsers = async (req,res) => {
    try {
        
        const users = await getAllUsersService();
        res.status(200).json(users);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message});
    }
}

export const updateUser = async (req,res) => {
    try {
        const updatedUser = await updateUserService(req.query, req.body);
        res.status(201).json({message:  `updated.`, updatedUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

export const changePassword = async (req,res) => {
    try {
        await changePasswordService(req.user.id, req.body);
        res.status(200).json({message: "Password changed successfully!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

export const deleteUser = async (req,res) => {
    try {
        const deletedUser = await deleteUserService(req.user.id, req.body);
        res.status(200).json({message: "User deleted successfully!", deletedUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

export const logOutUser = async (req,res) => {
    try {
        const logOut = await logOutUserService(req.user.id, req.body);
        req.status(200).json({message: "User log out seccessful!", logOut});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

export const forgetPassword = async (req,res) => {
    try {
        const forgetPassword = await forgetPasswordService(req.user.id);
        res.status(200).json({message: "OTP sent to your email"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
>>>>>>> 7103fd16d8e6f1bc917a4951486c1e75c9bbdf3c
    }
}