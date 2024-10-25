import express from "express";
import { initializePassport, passportSession, sessionConfig } from "./auth.js";
import { authRouter } from "./routes.js";
import cors from "cors";
export const app = express();

//middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sessionConfig);
app.use(initializePassport);
app.use(passportSession);
app.use("/auth", authRouter);

app.get("/hello-world", (req, res) => {
  res.send("Hello, World!");
});
