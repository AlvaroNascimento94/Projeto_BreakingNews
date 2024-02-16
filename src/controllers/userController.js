const userService = require("../services/userServices");
const User = require("../models/User");
const mongoose = require("mongoose");

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existingUser) {
    return res
      .status(409)
      .send({ message: "Username or email already exists" });
  }

  const user = await userService.createService(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error creating user" });
  }

  res.status(201).send({
    message: "User created successfully",

    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

const findAll = async (req, res) => {
  const users = await userService.findAllService();

  if (users.length === 0) {
    return res.status(400).send("There are no registered users");
  }
  res.send(users);
};

const findId = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "User not found" });
  }
  const user = await userService.findIdService(id);
  if (!user) {
    return res.status(400).send({ message: "User not found" });
  }
  res.send(user);
};

const update = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name && !username && !email && !password && !avatar && !background) {
    res.status(400).send({ message: "Submit at least one field for update" });
  }

  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "User not found" });
  }

  const user = await userService.findIdService(id);

  if (!user) {
    return res.status(400).send({ message: "User not found" });
  }

  await userService.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  );

  res.send({message: "Usse successfully updated!"})
};

module.exports = { create, findAll, findId, update };
