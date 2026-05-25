import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const ACCESS_TOKEN_EXPIRE_IN = process.env.ACCESS_TOKEN_EXPIRE_IN;
export const REFRESH_TOKEN_EXPIRE_IN = process.env.REFRESH_TOKEN_EXPIRE_IN;
export const OTP_VALID_TIME_EXPIRE_IN = process.env.OTP_VALID_TIME_EXPIRE_IN;
