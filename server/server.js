import http from "http";
import { app } from "./app.js";

import envConfig from "./config/env.js";
import db from "./config/dbConfig.js";

//server
export const serverInstance = http.createServer(app);

const port = envConfig.PORT || 3000;

const startServer = async () => {
  try {
    await db.connect();
    await db.connection.sync();
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

process.on("SIGINT", async () => await db.disconnect()); // Handle Ctrl+C in terminal
process.on("SIGTERM", async () => await db.disconnect()); // Handle kill command

startServer();
