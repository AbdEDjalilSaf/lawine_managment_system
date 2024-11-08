import express from "express";
import { registerUser } from "./controllers/registerUser.js";
import { authenticateUser } from "./middlewares/authenticateUser.js";
import { logoutUser } from "./controllers/logoutUser.js";
import passport from "passport";
export const authRouter = express.Router();
import { ensureAuthenticated } from "./utils/ensureAuthentication.js";
import { getCurrentUser } from "./controllers/getCurrentUser.js";

authRouter.post("/register", registerUser);

authRouter.route("/login").post(authenticateUser);

authRouter.route("/logout").post(logoutUser);

authRouter.get("/check-auth", ensureAuthenticated, getCurrentUser);

//google
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback route after Google redirects back
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login", // in case of failure
    successRedirect: "http://localhost:3000/home", // In case of sucess
    session: true, // Keep the session (persistent login)
  })
);
