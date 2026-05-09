import express from "express";
import {
  isAuthenticated,
  login,
  logout,
  register,
  sendVerifyOtp,
  verifyEmail,
   sendResetOtp,
   resetPassword
} from "../controller/userAuth.js";
import auth from "../middleware/auth.js";
const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/verifyotp", auth, sendVerifyOtp);
authRouter.post("/verify-account", auth, verifyEmail);
authRouter.get("/is-auth", auth, isAuthenticated);
authRouter.post("/send-reset-otp", sendResetOtp);
authRouter.post("/reset-password",resetPassword);

export default authRouter;
