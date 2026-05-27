import jwt from "jsonwebtoken";
import { JWT_SECRET, ACCESS_TOKEN_EXPIRE_IN, REFRESH_TOKEN_EXPIRE_IN } from "../config/envConfig.js";

export const accesstoken = (id, username, role) => {
    const token = jwt.sign(
        {
            id, 
            username, 
            role
        }, 
        JWT_SECRET,
        {expiresIn: ACCESS_TOKEN_EXPIRE_IN}
    )
    return token;
}

export const refreshToken = (id) => {
    const token = jwt.sign(
        {id}, 
        JWT_SECRET,
        {expiresIn: ACCESS_TOKEN_EXPIRE_IN}
    )
    return token;
}
