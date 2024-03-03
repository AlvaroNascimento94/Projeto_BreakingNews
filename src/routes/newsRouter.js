import { Router } from "express";
import { create, findAll, topNews, findById, searchByTitle} from "../controllers/newsController.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/top", topNews)
router.get("/search", searchByTitle)
router.get("/:id", authMiddleware, findById)

export default router;
