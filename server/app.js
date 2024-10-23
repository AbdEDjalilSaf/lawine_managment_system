import express from "express";
import { initializePassport, passportSession, sessionConfig } from "./auth.js";
export const app = express();

//middlewares
app.use(sessionConfig);
app.use(initializePassport);
app.use(passportSession);

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Express!");
});
