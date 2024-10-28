import { Sequelize, DataTypes, Model } from "sequelize";
import { connectionInstance } from "../config/db.js";

class GoogleUser extends Model {}

GoogleUser.init(
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
    googleId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connectionInstance,
    modelName: "GoogleUser",
    tableName: "google_users",
  }
);

export default GoogleUser;
