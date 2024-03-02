import { Router } from "express";
import { create, findAll } from "../controllers/newsController.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", findAll);

export default router;
