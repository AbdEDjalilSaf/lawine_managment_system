import { Sequelize } from "sequelize";
import { envConfig } from "./env.js";

const dbName = envConfig.MYSQL_DB;
const user = envConfig.MYSQL_USER;
const password = envConfig.MYSQL_PASSWORD;
const host = envConfig.MYSQL_HOST;

const sequelize = new Sequelize(dbName, user, password, {
  host,
  dialect: "mysql",
});

export default async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

//close connection
export const gracefulShutdown = () => {
  console.log("Shutting down gracefully...");
  // Optionally close database connection and other resources
  sequelize
    .close()
    .then(() => {
      console.log("Database connection closed.");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Error during shutdown:", err);
      process.exit(1);
    });
};
