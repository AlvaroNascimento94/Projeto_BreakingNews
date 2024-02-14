const route = require("express").Router();
const userController = require("../controllers/userController");

route.post("/", userController.create);

module.exports = route;
