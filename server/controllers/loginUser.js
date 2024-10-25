import User from "../models/users.js";
import { isPasswordMatch } from "../utils/verifyPassword.js";

export const loginUser = async (email, password, done) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log("User from login not found");
      return done(null, false);
    } else if (!isPasswordMatch(password, user.dataValues.password)) {
      console.log("User found but password doesn't match");
      return done(null, false);
    } else {
      console.log("User from login found");
      return done(null, user);
    }
  } catch (error) {
    return done(error);
  }
};
