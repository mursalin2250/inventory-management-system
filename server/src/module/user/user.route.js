import express from "express";
<<<<<<< HEAD
import {getAllUser, createUser, loginUser} from "./user.controller.js";

const router = express.Router();

router.get("/", getAllUser);
router.post("/", createUser);
router.post("/login", loginUser);

export default router;

=======

import { 
    createUser, 
    loginUser, 
    getUser, 
    getAccessToken, 
    updateUser, 
    changePassword, 
    getAllUsers, 
    deleteUser, 
    forgetPassword
} from "./user.controller.js";

import { 
    authenticate, 
    authorize, 
    authorizeAdmin 
} from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.post("/token", getAccessToken);
router.get("/", authenticate, authorize, getUser);
router.get("/all", authenticate, authorizeAdmin, getAllUsers);
router.put("/", authenticate, updateUser);
router.post("/change-password", authenticate, changePassword);
router.post("/forget-password", authenticate, forgetPassword);
router.delete("/", authenticate, deleteUser);


export default router;
>>>>>>> 7103fd16d8e6f1bc917a4951486c1e75c9bbdf3c
