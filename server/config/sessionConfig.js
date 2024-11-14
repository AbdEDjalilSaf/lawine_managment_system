import session from "express-session";
import envConfig from "./env.js";

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
