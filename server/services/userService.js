import bcrypt from "bcrypt";
import userRepository from "../data/userRepository.js";
import userUtils from "../utils/user/userUtils.js";

const FailureMessage = { message: "Incorrect Email or Password" };

class UserServices {
  async verifyUser(email, password, done) {
    try {
      const user = await userRepository.findUserByEmail(email);

      if (!user) {
        return done(null, false, FailureMessage);
      }
      const isPasswordMatch = await bcrypt.compare(
        password,
        user.dataValues.password
      );
      if (!isPasswordMatch) {
        return done(null, false, FailureMessage);
      }
      return done(null, {
        id: user.dataValues.id,
        fullName: user.dataValues.fullName,
        email: user.dataValues.email,
        googleId: user.dataValues.googleId,
        createdAt: user.dataValues.createdAt,
        updatedAt: user.dataValues.updatedAt,
      });
    } catch (error) {
      return done(error);
    }
  }

  async registerUser(fullName, email, password) {
    // Basic validations
    if (!fullName || !email || !password) {
      throw new Error("All fields are required.");
    }
    if (!userUtils.validateEmailPattern(email)) {
      throw new Error("Invalid email format.");
    }
    if (!userUtils.validatePasswordPattern(password)) {
      throw new Error("Password is weak.");
    }

    const existingUser = await userRepository.findUserByEmail(email);
    if (existingUser) {
      throw new Error("User already exists, login instead");
    }

    const hashedPassword = await userUtils.hashPassword(password);

    const newUser = await userRepository.createUser({
      fullName,
      email,
      password: hashedPassword,
    });

    return newUser;
  }

  async loginWithGoogle(profile) {
    const [user] = await userRepository.findOrCreateUserByGoogleProfile(
      profile
    );
    return user;
  }
}
const userService = new UserServices();
export default userService;
