<<<<<<< HEAD
import { Router } from "express";
import {
  create,
  findAll,
  topNews,
  findById,
  searchByTitle,
  byUser,
  update,
  deletePost,
  likeNews,
  addComment,
  deleteComment,
} from "../controllers/newsController.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/top", topNews);
router.get("/search", searchByTitle);
router.get("/byUser", authMiddleware, byUser);

router.get("/:id", authMiddleware, findById);

router.patch("/:id", authMiddleware, update);

router.delete("/:id", authMiddleware, deletePost);
router.patch("/like/:id", authMiddleware, likeNews)
router.patch("/comment/:id", authMiddleware, addComment)
router.patch("/comment/:idNews/:idComment", authMiddleware, deleteComment)

export default router;
=======
import { Router } from "express";
import {
  create,
  findAll,
  topNews,
  findById,
  searchByTitle,
  byUser,
  update,
  deletePost,
  likeNews, 
  addComment,
  deleteComment,
} from "../controllers/newsController.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/top", topNews);
router.get("/search", searchByTitle);
router.get("/byUser", authMiddleware, byUser);

router.get("/:id", authMiddleware, findById);

router.patch("/:id", authMiddleware, update);

router.delete("/:id", authMiddleware, deletePost);
router.patch("/like/:id", authMiddleware, likeNews)
router.patch("/comment/:id", authMiddleware, addComment)
router.patch("/comment/:idNews/:idComment", authMiddleware, deleteComment)

export default router;
>>>>>>> fb4a0ca7ec53b1c6ad947560f590137ca102458e
