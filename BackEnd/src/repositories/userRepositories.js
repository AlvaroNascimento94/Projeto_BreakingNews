import User from "../models/User.js";

const findByEmail = (email) => User.findOne({ email: email });

const createRepository = (body) => User.create(body);

const findAllRepository = () => User.find();

const findIdRepository = (id) => User.findById(id);

const updateRepository = (id, body) =>
  User.findByIdAndUpdate({ _id: id }, { body }, {rawResult: true});

export default {
  //cfindByEmail,
  createRepository,
  findAllRepository,
  findIdRepository,
  updateRepository,
};
