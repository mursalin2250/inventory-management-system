import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
    try {
        const salt_count = 10;
        const hashedPassword = await bcrypt.hash(password, salt_count);
        return hashedPassword;
    } catch (error) {
        throw new Error(error);
    }
}

export const comparePassword = async (password, encryptedPassword) => {
    try {

        const compare = await bcrypt.compare(password, encryptedPassword);
        return compare;
    } catch (error) {
        throw new Error(error);
    }
}

