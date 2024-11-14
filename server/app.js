import cors from "cors";
import express from "express";

import {
  initializePassport,
  passportSession,
} from "./config/passportConfig.js";
import { sessionConfig } from "./config/sessionConfig.js";
import corsConfig from "./config/corsConfig.js";

import authRoutes from "./routes/authRoutes.js";
import casesRoutes from "./routes/casesRoutes.js";

export const app = express();

app.use(cors(corsConfig.configuration()));

// Register middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sessionConfig);
app.use(initializePassport);
app.use(passportSession);

// Routes
app.use("/auth", authRoutes);
app.use("/cases", casesRoutes);
