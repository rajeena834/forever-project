import express from "express";
import { adminLogin, loginUser, registerUser } from "../controllers/userController.js";
import adminAuth from "../middleware/adminAuth.js";

const userRouter = express.Router();
userRouter.post("/register",adminAuth, registerUser);
userRouter.post("/login",adminAuth, loginUser);
userRouter.post("/admin",adminAuth,adminLogin);

export default userRouter;
