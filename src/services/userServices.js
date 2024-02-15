const User = require("../models/User");

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findIdService = (id) => User.findById(id);

module.exports = {
  createService,
  findAllService,
  findIdService,
};
