const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "Comment",
  }
);

module.exports = Comment;