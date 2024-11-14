import passport from "passport";
import LocalStrategy from "passport-local";
import GoogleStrategy from "passport-google-oauth20";
import envConfig from "../config/env.js";

import User from "../models/userModel.js";
import userService from "../services/userService.js";
import { authenticateByGoogle } from "../middlewares/authenticateByGoogle.js";

export const initializePassport = passport.initialize();
export const passportSession = passport.session();

// ########################## Passport Strategies ##################################
passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) =>
    userService.verifyUser(email, password, done)
  )
);
passport.use(
  new GoogleStrategy(
    {
      clientID: envConfig.GOOGLE_ID,
      clientSecret: envConfig.GOOGLE_SECRET,
      callbackURL: envConfig.GOOGLE_CALLBACK,
    },
    authenticateByGoogle
  )
);

// ########################## Serialization & Deserialization #############################
passport.serializeUser((user, callback) => {
  console.log("from serialization");
  process.nextTick(() => {
    return callback(null, user.id);
  });
});

passport.deserializeUser(async (id, callback) => {
  try {
    const user = await User.findByPk(id);
    console.log("from deserialization");
    return callback(null, {
      id: user.dataValues.id,
      fullName: user.dataValues.fullName,
      email: user.dataValues.email,
      googleId: user.dataValues.googleId,
      createdAt: user.dataValues.createdAt,
      updatedAt: user.dataValues.updatedAt,
    });
  } catch (err) {
    return callback(err);
  }
});
