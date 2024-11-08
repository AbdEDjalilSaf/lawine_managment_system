import cors from "cors";
import express from "express";
import { initializePassport, passportSession, sessionConfig } from "./auth.js";
import { authRouter } from "./routes.js";
import { ensureAuthenticated } from "./utils/ensureAuthentication.js";

export const app = express();
var whitelist = ["http://localhost:3000", "http://localhost:5173", null]; // Add `null` for local testing

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// Other middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sessionConfig);
app.use(initializePassport);
app.use(passportSession);

// Routes
app.use("/auth", authRouter);

app.get("/hello-world", (req, res) => {
  res.send("Hello, World!");
});
