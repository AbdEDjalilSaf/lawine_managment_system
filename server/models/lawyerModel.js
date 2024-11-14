import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
// Define the Lawyer model using sequelize.define
const Lawyer = db.connection.define(
  "Lawyer", // Model name
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validates that the email field contains a valid email address
      },
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    licenseNumber: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  },
  {
    tableName: "lawyers", // Table name
    timestamps: true, // Enables createdAt and updatedAt fields
    updatedAt: "updatedAt",
    createdAt: "createdAt",
  }
);

export default Lawyer;
