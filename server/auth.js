import session from "express-session";
import { envConfig } from "./config/env.js";
import passport from "passport";
import LocalStrategy from "passport-local";
import GoogleStrategy from "passport-google-oauth20";
import { loginUser } from "./controllers/loginUser.js";
import { loginGoogleUser } from "./controllers/google/loginGoogleUser.js";

export const sessionConfig = session({
  secret: envConfig.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: envConfig.NODE_ENV == "production" },
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
    return callback(null, user.id);
  });
});
passport.deserializeUser(async (id, callback) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return callback(new Error("User not found"));
    }
    return callback(null, user);
  } catch (err) {
    return callback(err);
  }
});
