import express from "express";
import userController from "../controllers/userController.js";
import { validId, validUser } from "../middlewares/globalMiddlewares.js";

const router = express.Router();

router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", validId, validUser, userController.findId);
router.patch("/:id", validId, validUser, userController.update);

export default router