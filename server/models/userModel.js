import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";

const User = db.connection.define(
  "User", // Model name
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "users", // Table name
    timestamps: true, // Enables createdAt and updatedAt fields
    updatedAt: "updatedAt",
    createdAt: "createdAt",
  }
);

export default User;
