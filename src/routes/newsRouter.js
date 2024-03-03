import { Router } from "express";
import { create, findAll, topNews} from "../controllers/newsController.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/top", topNews)

export default router;
