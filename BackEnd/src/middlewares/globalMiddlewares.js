<<<<<<< HEAD
import mongoose from "mongoose";
import userService from "../services/userServices.js";

export const validId = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid Id" });
  }
  next();
};

export const validUser = async (req, res, next) => {
  const id = req.params.id;
  const user = await userService.findIdService(id);

  if (!user) {
    return res.status(400).send({ messgae: "User not found" });
  }

  req.id = id
  req.user = user

  next();
};

=======
import mongoose from "mongoose";
import userService from "../services/userServices.js";

export const validId = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid Id" });
  }
  next();
};

export const validUser = async (req, res, next) => {
  const id = req.params.id;
  const user = await userService.findIdService(id);

  if (!user) {
    return res.status(400).send({ messgae: "User not found" });
  }

  req.id = id
  req.user = user

  next();
};

>>>>>>> fb4a0ca7ec53b1c6ad947560f590137ca102458e
