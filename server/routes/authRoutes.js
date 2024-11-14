import express from "express";
import passport from "passport";
//controllers imports
import userController from "../controllers/users/userController.js";
//middlewares imports
import { authenticateUser } from "../middlewares/authenticateUser.js";

const authRoutes = express.Router();

// ################# Local Authenticaton ############################

authRoutes.post("/register", userController.registerUser);

authRoutes.post("/login", authenticateUser, userController.loginUser);

authRoutes.post("/logout", userController.logoutUser);

// ############################### Google Authenticaion #################
authRoutes.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
// Callback route after Google redirects back
authRoutes.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login", // in case of failure
    successRedirect: "http://localhost:3000/home", // In case of sucess
    session: true, // Keep the session (persistent login)
  })
);

export default authRoutes;
