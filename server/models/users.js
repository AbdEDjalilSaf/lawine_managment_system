//define the user model;
import { Sequelize, DataTypes, Model } from "sequelize";
import { connectionInstance } from "../config/db.js";

class User extends Model {}

User.init(
  {
    // Model attributes are defined
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
    // Other model options go here
    sequelize: connectionInstance, // We need to pass the connection instance
    modelName: "User", // We need to choose the model
    tableName: "users", //table name inside database;
  }
);

export default User;
