import Sequelize from "sequelize";
import sequelize from "../index";

Movies.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: { type: Sequelize.STRING },
    year: { type: Sequelize.NUMBER },
    image: { type: Sequelize.STRING },
    videolink: { type: Sequelize.STRING },
    videowidth: { type: Sequelize.STRING },
    videoheight: { type: Sequelize.STRING },
    rating: { type: Sequelize.NUMBER },
  },
  { sequelize, tableName: "Movies" }
);
