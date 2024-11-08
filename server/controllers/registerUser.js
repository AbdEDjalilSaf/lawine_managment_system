import User from "../models/users.js";
import { hashPassword } from "../utils/hashPassword.js";
import { validateEmailPattern } from "../utils/patterns/validateEmailPattern.js";
import { validatePasswordPattern } from "../utils/patterns/validatePasswordPattern.js";

export const registerUser = async (req, res) => {
  //extract req body
  const { fullName, email, password } = req.body;
  //validation
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (!validateEmailPattern(email)) {
    return res
      .status(400)
      .json({ type: "email", message: "Invalid email format." });
  }

  if (!validatePasswordPattern(password)) {
    return res
      .status(400)
      .json({ type: "password", message: "Password is weak." });
  }
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(200).json({
        message: "User Already Exist, Login instead",
      });
    } else {
      const hashedPassword = await hashPassword(password);
      const newUser = await User.create({
        fullName,
        email,
        password: hashedPassword,
      });
      if (newUser) {
        return res.status(201).json({
          message: "Registration was successfull",
          user: {
            id: newUser.dataValues.id,
            fullName: newUser.dataValues.fullName,
            email: newUser.dataValues.email,
            createdAt: newUser.dataValues.createdAt,
            updatedAt: newUser.dataValues.updatedAt,
          },
        });
      } else {
        return res.status(500).json({
          message: "Error Occured during user registration",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error, try again!",
    });
  }
};
