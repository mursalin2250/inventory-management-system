import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envConfig.js";

export const authenticate = (req,res,next) => {
    const header = req.headers["authorization"] || req.headers["Authorization"];
    if(!header || !header.startsWith("Bearer ")){
        res.status(401).json({message: "Invalid Token"});
    }

    const token = header.split(" ")[1];

    try {
        const decode = jwt.verify(token, JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({message: error.message});
    }
}

export const authorize = async (req,res,next) => {
    const role = await req.user.role;
    try {
        if(role === "admin" || role === "user"){
            next();
        }else{
            res.status(403).json({message: "page not found!"});
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({message: error.message});
    }
}

export const authorizeAdmin = async (req,res,next) => {
    const role = await req.user.role;
    
    try {
        if(role === "admin"){
            next();
        }else{
            res.status(403).json({message: "page not found!"});
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({message: error.message});
    }
}
