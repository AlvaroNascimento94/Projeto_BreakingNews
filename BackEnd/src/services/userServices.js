<<<<<<< HEAD
import User from "../models/User.js";

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findIdService = (id) => User.findById(id);

const updateService = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  User.findByIdAndUpdate(
    { _id: id }, 
    { name, username, email, password, avatar, background }
  );

export default {
  createService,
  findAllService,
  findIdService,
  updateService
};
=======
import User from "../models/User.js";

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findIdService = (id) => User.findById(id);

const updateService = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  User.findByIdAndUpdate(
    { _id: id }, 
    { name, username, email, password, avatar, background }
  );

export default {
  createService,
  findAllService,
  findIdService,
  updateService
};
>>>>>>> fb4a0ca7ec53b1c6ad947560f590137ca102458e
