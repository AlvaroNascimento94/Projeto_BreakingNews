import bcrypt from "bcrypt";
import { loginService } from "../services/authServices.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginService(email);
    
    if (!user) {
        return res.status(404).send({ message: "User or Password not found" });
    }
    
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    
    if (!passwordIsValid) {
      return res.status(404).send({ message: "User or Password not found" });
    }
    res.send("login ok");
  } catch (error) {
    res.status(500).send(err.message);
  }
};
export { login };
