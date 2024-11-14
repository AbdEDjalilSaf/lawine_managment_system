import { Sequelize } from "sequelize";
import envConfig from "./env.js";

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    const dbName = envConfig.MYSQL_DB;
    const user = envConfig.MYSQL_USER;
    const password = envConfig.MYSQL_PASSWORD;
    const host = envConfig.MYSQL_HOST;

    this.connection = new Sequelize(dbName, user, password, {
      host,
      dialect: "mysql",
      logging: false,
    });

    Database.instance = this;
  }

  async connect() {
    try {
      await this.connection.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  async disconnect() {
    try {
      console.log("Shutting down gracefully...");
      await this.connection.close();
      console.log("Database connection closed.");
    } catch (error) {
      console.error("Error during shutdown:", error);
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

// Exporting the singleton instance
const db = Database.getInstance();
export default db;
