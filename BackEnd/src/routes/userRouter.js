<<<<<<< HEAD
import express from "express";
import userController from "../controllers/userController.js";
import { validId, validUser } from "../middlewares/globalMiddlewares.js";

const router = express.Router();

router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", validId, validUser, userController.findId);
router.patch("/:id", validId, validUser, userController.update);

=======
import express from "express";
import userController from "../controllers/userController.js";
import { validId, validUser } from "../middlewares/globalMiddlewares.js";

const router = express.Router();

router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", validId, validUser, userController.findId);
router.patch("/:id", validId, validUser, userController.update);

>>>>>>> fb4a0ca7ec53b1c6ad947560f590137ca102458e
export default router