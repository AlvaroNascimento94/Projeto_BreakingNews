import userRepositories from "../repositories/userRepositories.js";
import User from "../models/User.js";
import authServices from "./authServices.js";

const createServices = async (body) => {
  const { name, username, email, password, avatar, background } = body;

  if (!name || !username || !email || !password || !avatar || !background)
    throw new Error("Submit all fields for registration");

  const existingUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existingUser) throw new Error("Username or email already exists");

  const user = await userRepositories.createRepository(body);

  if (!user) throw new Error("Error creating user");

  const token = authServices.generateToken(user.id);

  return {
    token,
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  };
};

const findAllServices = async () => {
  const users = await userRepositories.findAllRepository();

  if (users.length === 0) throw new Error("There are no registered users");

  return users;
};

const findIdServices = async (userIdParam, userIdLogged) => {
  let idParam;
  if (!userIdParam) {
    userIdParam = userIdLogged;
    idParam = userIdParam;
  } else {
    idParam = userIdParam;
  }
  if (!idParam)
    throw new Error("Send an id in the parameters to search for the user");

  const user = await userRepositories.findIdRepository(idParam);

  if (!user) throw new Error("User not found");

  return user;
};

const updateServices = async (body, userId) => {
  const { name, username, email, password, avatar, background } = body;

  if (!name && !username && !email && !password && !avatar && !background)
    throw new Error("Submit at least one field to update the user");

  const user = await userRepositories.findIdRepository(userId);

  if (user._id != userId) throw new Error("You cannot update this user");

  if (password) password = await bcrypt.hash(password, 10);

  await userRepositories.updateRepository(userId, body);

  return { message: "User successfully updated!" };
};

export default {
  createServices,
  findAllServices,
  findIdServices,
  updateServices,
};
