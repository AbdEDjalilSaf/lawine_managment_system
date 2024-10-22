import "dotenv/config";

export const envConfig = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DB: process.env.MYSQL_DB,
  MYSQL_HOST: process.env.MYSQL_HOST,
};
