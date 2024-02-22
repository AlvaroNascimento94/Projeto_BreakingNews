import { Router } from "express";
import { create, findAll } from "../controllers/newsController.js";

const router = Router();

router.post("/", create);
router.get("/", findAll);
