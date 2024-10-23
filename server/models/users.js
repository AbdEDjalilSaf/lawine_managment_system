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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
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
