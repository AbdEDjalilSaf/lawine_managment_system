import User from "../models/users.js";
import { hashPassword } from "../utils/hashPassword.js";
import { validateEmailPattern } from "../utils/patterns/validateEmailPattern.js";
import { validatePasswordPattern } from "../utils/patterns/validatePasswordPattern.js";
export const registerUser = async (req, res, next) => {
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
      console.log("User has been found!");
      return res.status(200).json({
        message: "User Already found",
        user: user,
      });
    } else {
      console.log("User not found. Creating new one...");
      const hashedPassword = await hashPassword(password);
      const newUser = await User.create({
        fullName,
        email,
        password: hashedPassword,
      });
      if (newUser) {
        console.log("User created successfully");
        next(null, newUser.dataValues);
      } else {
        console.log("failed to create the user!");
        return res.status(500).json({
          message: "Error Occured during user creation",
        });
      }
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
