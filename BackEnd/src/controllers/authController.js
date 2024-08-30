
import authServices from "../services/authServices.js";

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await authServices.loginService({email,password})
    return res.send(token)
  } catch (error) {
    res.status(500).send(err.message);
  }
};
export { loginController };
