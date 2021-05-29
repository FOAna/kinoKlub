import { config } from "./config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(config.database);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
