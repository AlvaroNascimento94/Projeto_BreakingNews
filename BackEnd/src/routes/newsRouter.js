import newsController from "../controllers/newsController.js";
import authMiddleware from "../middlewares/authMiddlewares.js";
import { validId } from '../middlewares/globalMiddlewares';

import { Router } from "express";

const newsRouter = Router();

newsRouter.get("/", newsController.findAllNewsController);
newsRouter.get("/top", newsController.topNewsController);
newsRouter.get("/search", newsController.searchNewsController);

newsRouter.use(authMiddleware)
newsRouter.post("/create", newsController.createNewsController);

newsRouter.use(validId)
newsRouter.get("/byIdPost/:id", newsController.findNewsByIdController);
postRouter.get("/byUserId", newsController.findNewsByUserIdController);
postRouter.patch("/update/:id", newsController.updateNewsController);
postRouter.delete("/delete/:id", newsController.deleteNewsController);
postRouter.patch("/:id/like", newsController.likeNewsController);
postRouter.patch("/:id/comment", newsController.commentNewsController);
postRouter.patch(
  "/:id/:idComment/comment",
  newsController.commentDeleteNewsController
);

export default newsRouter;
