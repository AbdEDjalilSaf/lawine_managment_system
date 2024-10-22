import http from "http";
import connectDatabase from "./config/db.js";
import { gracefulShutdown } from "./config/db.js";
import { app } from "./app.js";
import { envConfig } from "./config/env.js";

//server
const serverInstance = http.createServer(app);

const port = envConfig.PORT || 3000;

const startServer = async () => {
  try {
    await connectDatabase();
    serverInstance.listen(port, () => {
      console.log(
        `Server is running on port ${port} on mode: "${envConfig.NODE_ENV}"`
      );
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
};

process.on("SIGINT", gracefulShutdown); // Handle Ctrl+C in terminal
process.on("SIGTERM", gracefulShutdown); // Handle kill command

startServer();
