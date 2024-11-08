import User from "../models/users.js";
import bcrypt from "bcrypt";

export const loginUser = async (email, password, done) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return done(null, false, { message: "No account found, create one" });
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      user.dataValues.password
    );
    if (!isPasswordMatch) {
      return done(null, false, {
        message: "Password is wrong, try again",
      });
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
};
