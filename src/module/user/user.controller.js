import { accessTokenService, createUserService, getUserService, loginUserService } from "./user.service.js";

export const createUser = async (req,res) => {
    try {
        const user = await createUserService(req.body);
        res.status(201).json({message: "User created successfully!", user});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

export const loginUser = async (req,res) => {
    try {
        const user = await loginUserService(req.body);
        res.status(200).json({message: "User login successful!", user});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message});
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
        res.status(500).json({message: error.message});
    }
}