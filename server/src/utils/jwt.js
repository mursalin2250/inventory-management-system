import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_EXPIRE_IN, JWT_SECRET, REFRESH_TOKEN_EXPIRE_IN } from "../config/envConfig.js";


export const accessToken = (id, username, role) => {
    const accessToken = jwt.sign(
        {
            id: id,
            username: username,
            role: role
        },
        JWT_SECRET,
        { expiresIn: ACCESS_TOKEN_EXPIRE_IN }
    )
    return accessToken;
};

export const refreshToken = (id) => {
    const refreshToken = jwt.sign(
        {id},
        JWT_SECRET,
        { expiresIn: REFRESH_TOKEN_EXPIRE_IN }
    );
    return refreshToken;
};

export const verifyToken = (token) => {
    try {
        const verify = jwt.verify(token, JWT_SECRET);
        return verify;
    } catch (error) {
        throw new Error("Invalid or expired token");
    }
}

