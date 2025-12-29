import { 
    accessTokenService, 
    changePasswordService, 
    createUserService, 
    deleteUserService, 
    getAllUsersService, 
    getUserService, 
    loginUserService, 
    logOutUserService, 
    updateUserService 
} from "./user.service.js";

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
        res.status(200).json({success: true, status_code: 200, message: "User login successful!", userInfo: user});
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