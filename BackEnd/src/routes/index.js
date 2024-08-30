import { Router } from "express";
import userRouter from "./userRouter";
import authRouter from "./authRouter";
import newsRouter from "./newsRouter";

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/news", newsRouter);

export default router 