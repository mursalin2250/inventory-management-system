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

export const createUser = async (req,res) => {
    try {
        const user = await createUserService(req.body);
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
    }
}