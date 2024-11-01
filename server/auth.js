import session from "express-session";
import { envConfig } from "./config/env.js";
import passport from "passport";
import LocalStrategy from "passport-local";
import GoogleStrategy from "passport-google-oauth20";
import { loginUser } from "./controllers/loginUser.js";
import { loginGoogleUser } from "./controllers/google/loginGoogleUser.js";
import User from "./models/users.js";

export const sessionConfig = session({
  secret: envConfig.SESSION_SECRET, // Replace with a secure secret
  resave: false, // Don't save the session if it hasn't been modified
  saveUninitialized: false, // Only save sessions that have been initialized
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day session expiration
    httpOnly: false, // Allow cookies to be accessed by client
    secure: false, // Set to true if using HTTPS
    sameSite: "lax", // Helps with cross-origin requests
  },
});
export const initializePassport = passport.initialize();
export const passportSession = passport.session();

//login strategy
passport.use(new LocalStrategy({ usernameField: "email" }, loginUser));
//google auth
passport.use(
  new GoogleStrategy(
    {
      clientID: envConfig.GOOGLE_ID,
      clientSecret: envConfig.GOOGLE_SECRET,
      callbackURL: envConfig.GOOGLE_CALLBACK,
    },
    loginGoogleUser
  )
);
//serialize and deserialize
passport.serializeUser((user, callback) => {
  process.nextTick(() => {
    return callback(null, user.dataValues.id);
  });
});

passport.deserializeUser(async (id, callback) => {
  try {
    const user = await User.findByPk(id);
    return callback(null, user.dataValues);
  } catch (err) {
    return callback(err);
  }
});
