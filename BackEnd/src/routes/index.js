import { Router } from "express";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import newsRouter from "./newsRouter.js";

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/news", newsRouter);

export default router 