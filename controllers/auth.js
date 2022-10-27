const User = require("../models/User");
const { StatusCode } = require("http-status-codes");

const register = async (req, res) => {
  // bad practis
  const user = await User.create({ ...req.body });
  res.status(StatusCode.CREATED).json(user);
};

const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
