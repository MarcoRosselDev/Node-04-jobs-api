const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  /* first validation
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("please provide name, email and password");
  }
  // bad practis
  */
  // se puede validar aqui pero el error es muy grande y queremos simplificar las cosas solo enviando un mensaje de texto

  /* crypt pass first option
  const { name, email, password } = req.body;
  
  const salt = await bcrypt.genSalt(10); // numero más alto más proceso pero más encryptado
  // 10 es por defecto pero es más que seguro
  const hashedPassword = await bcrypt.hash(password, salt);
  
  const tempUser = { name, email, password: hashedPassword };
  const user = await User.create({ ...tempUser });
  */

  // crypt pass from models User.js

  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
