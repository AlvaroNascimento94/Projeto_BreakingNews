import userService from "../services/userServices.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const create = async (req, res) => {
  try {
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

    const user = await userService
      .createService(req.body)
      .catch((err) => console.log(err.message));

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
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService();

    if (users.length === 0) {
      return res.status(400).send("There are no registered users");
    }
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findId = async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;
    if (!name && !username && !email && !password && !avatar && !background) {
      res.status(400).send({ message: "Submit at least one field for update" });
    }

    const { id, user } = req;

    const newPassword =
      password !== undefined ? await bcrypt.hash(password, 10) : undefined;

    await userService.updateService(
      id,
      name,
      username,
      email,
      newPassword,
      avatar,
      background
    );

    res.send({ message: "Usse successfully updated!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default { create, findAll, findId, update };
