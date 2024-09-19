import newsController from "../controllers/newsController.js";
import authMiddleware from "../middlewares/authMiddlewares.js";
import { validId } from "../middlewares/globalMiddlewares.js";

import { Router } from "express";

const newsRouter = Router();

newsRouter.get("/", newsController.findAllNewsController);
newsRouter.get("/top", newsController.topNewsController);
newsRouter.get("/search", newsController.searchNewsController);

newsRouter.use(authMiddleware);
newsRouter.post("/create", newsController.createNewsController);

newsRouter.use(validId);
newsRouter.get("/byIdPost/:id", newsController.findNewsByIdController);
newsRouter.get("/byUserId", newsController.findNewsByUserIdController);
newsRouter.patch("/update/:id", newsController.updateNewsController);
newsRouter.delete("/delete/:id", newsController.deleteNewsController);
newsRouter.patch("/:id/like", newsController.likeNewsController);
newsRouter.patch("/:id/comment", newsController.commentNewsController);
newsRouter.patch(
  "/:id/:idComment/comment",
  newsController.commentDeleteNewsController
);

export default newsRouter;
