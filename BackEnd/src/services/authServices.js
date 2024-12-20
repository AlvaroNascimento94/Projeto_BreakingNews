import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import authRepositories from "../repositories/authRepositories.js"

function generateToken(id) {
  return jwt.sign({ id: id }, process.env.SECRET, { expiresIn: 86400 });
}

const loginService = async ({ email, password }) => {
  const user = await authRepositories.loginRepository(email)
  
  if (!user) throw new Error("Wrong password or username");

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) throw new Error("Invalid password");

  const token = generateToken(user.id);

  return token;
};

export default { loginService, generateToken };