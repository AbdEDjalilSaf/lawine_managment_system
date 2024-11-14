import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";

// Define the Case model using sequelize.define
const Case = db.connection.define(
  "Case", // Model name
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    caseNumber: {
      type: DataTypes.STRING(50),
      unique: true,
    },
    title: {
      type: DataTypes.STRING(50),
    },
    description: {
      type: DataTypes.TEXT,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users", // The table name of the foreign key
        key: "id",
      },
      onDelete: "CASCADE", // Optional: Cascade delete to handle client deletion
    },
    opposingParty: {
      type: DataTypes.STRING(255),
    },
    status: {
      type: DataTypes.ENUM("open", "closed", "in progress", "on hold"),
      defaultValue: "open",
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    assignedLawyerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "lawyers", // The table name of the foreign key
        key: "id",
      },
    },
    court: {
      type: DataTypes.STRING(255),
    },
    caseType: {
      type: DataTypes.STRING(50),
    },
    caseStage: {
      type: DataTypes.ENUM("appeal", "trial", "pre-appeal"),
      defaultValue: "pre-appeal",
    },
  },
  {
    tableName: "cases", // Table name
    timestamps: true, // Enables createdAt and updatedAt fields
    updatedAt: "updatedAt",
    createdAt: "createdAt",
  }
);

export default Case;
