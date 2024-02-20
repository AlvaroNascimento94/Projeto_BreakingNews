const route = require("express").Router();
const userController = require("../controllers/userController");

const { validId, validUser } = require("../middlewares/globalMiddlewares");

route.post("/", userController.create);
route.get("/", userController.findAll);
route.get("/:id", validId, validUser, userController.findId);
route.patch("/:id", validId, validUser, userController.update);

module.exports = route;
