import e from "express";
import { loginAuth } from "./login.auth.js";
import { signupAuth } from "./signup.auth.js";

const authRouter = e.Router();

authRouter.use("/login", loginAuth);
authRouter.use("/create-account", signupAuth);

export default authRouter;
