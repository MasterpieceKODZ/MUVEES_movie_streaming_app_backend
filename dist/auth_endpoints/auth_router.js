import express from "express";
import { signupAuth } from "./signup.auth.js";
import { loginAuth } from "./login.auth.js";
const authRouter = express.Router();
authRouter.post("/create-account", signupAuth);
authRouter.post("/login", loginAuth);
export default authRouter;
