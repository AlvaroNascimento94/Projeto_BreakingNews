import userServices from "../services/userServices.js";
import userService from "../services/userServices.js";

async function createUserController(req, res) {
  const body = req.body;

  try {
    const token = await userService.createServices(body);
    return res.status(201).send(token);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function findAllUserController(req, res) {
  try {
    const users = await userService.findAllServices();
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function findUserByIdController(req, res) {
  const { id: userId } = req.params;
  const userIdLogged = req.userId;
  try {
    const user = await userService.findIdServices(userId, userIdLogged);

    return res.send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function updateUserController(req, res) {
  const body = req.body;
  const { id: userId } = req.params;
  const userLogged = req.userId;
  try {
    const response = await userService.updateServices(body, userId, userLogged);

    res.send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export default {
  createUserController,
  findAllUserController,
  findUserByIdController,
  updateUserController,
};
