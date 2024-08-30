import authController from "../controllers/authController.js";x

import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", authController.loginController);

export default authRouter;