import e from "express";
import { signupAuth } from "./signup.auth.js";
const authRouter = e.Router();
authRouter.post("/create-account", signupAuth);
export default authRouter;
