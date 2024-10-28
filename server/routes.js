import express from "express";
import { registerUser } from "./controllers/registerUser.js";
import { authenticateUser } from "./middlewares/authenticateUser.js";
import { logoutUser } from "./controllers/logoutUser.js";
import passport from "passport";
export const authRouter = express.Router();

authRouter
  .route("/register")
  .post(registerUser, authenticateUser, (req, res) => {
    res.status(200).json({
      message: "Register successfull!",
      user: req.user,
    });
  });

authRouter.route("/login").post(authenticateUser, (req, res) => {
  return res.status(200).json({
    message: "login successfull",
    user: req.user,
  });
});

authRouter.route("/logout").post(logoutUser);

//google
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google"),
  function (req, res) {
    // Successful authentication, redirect home.
    res.json({ message: "login successful", user: req.user });
  }
);
