import session from "express-session";
import { envConfig } from "./config/env.js";
import passport from "passport";
import User from "./models/users.js";
import { LocalStrategy } from "passport-local";

export const sessionConfig = session({
  secret: envConfig.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: envConfig.NODE_ENV == "production" },
});
export const initializePassport = passport.initialize();
export const passportSession = passport.session();

//login strategy
passport.use(
  new LocalStrategy({ usernameField: "email" }, async function (
    email,
    password,
    done
  ) {
    // 'email' and 'password' are the values passed from req.body
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return done(null, false);
      } else if (password !== user.password) {
        // This is where you compare the passwords
        return done(null, false);
      } else {
        return done(null, user);
      }
    } catch (error) {
      return done(error);
    }
  })
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
