<<<<<<< HEAD
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const loginService = (email) => {
  return User.findOne({ email: email }).select("+password");
};

const generateToken = (id) =>
  jwt.sign({ id: id }, process.env.SECRET, { expiresIn: 86400 });

export { loginService, generateToken };
=======
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const loginService = (email) => {
  return User.findOne({ email: email }).select("+password");
};

const generateToken = (id) =>
  jwt.sign({ id: id }, process.env.SECRET, { expiresIn: 86400 });

export { loginService, generateToken };
>>>>>>> fb4a0ca7ec53b1c6ad947560f590137ca102458e
