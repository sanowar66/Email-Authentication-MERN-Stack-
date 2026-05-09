import express from "express";
import auth from "../middleware/auth.js";
import { getUserData } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get("/profile", auth, getUserData);


export default userRouter;