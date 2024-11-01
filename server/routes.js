import express from "express";
import { registerUser } from "./controllers/registerUser.js";
import { authenticateUser } from "./middlewares/authenticateUser.js";
import { logoutUser } from "./controllers/logoutUser.js";
import passport from "passport";
export const authRouter = express.Router();

authRouter.post("/register", registerUser);

authRouter.route("/login").post(authenticateUser);

authRouter.route("/logout").post(logoutUser);

//google
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback route after Google redirects back
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5137/login", // In case of failure
    session: true, // Keep the session (persistent login)
  }),
  (req, res) => {
    console.log("Response from google callback successfull");
    console.log("is Request authenticated now: ", req.isAuthenticated());
    // Successful authentication, redirect to the frontend /profile page with data
    res.redirect(`http://localhost:5173/profile`);
  }
);
