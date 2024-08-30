import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddlewares";
import { validId } from "../middlewares/globalMiddlewares.js";


import { Router } from "express";

const userRouter = Router();

userRouter.post("/create", userController.createUserController);

userRouter.use(authMiddleware)
userRouter.get("/", userController.findAllUserController);

userRouter.use(validId)
userRouter.get("/findById/:id?", userController.findUserByIdController);
userRouter.patch("/update/:id", userController.updateUserController);

export default userRouter;
