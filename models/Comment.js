const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
   {
      id:{
         type:DataTypes.INTEGER,
         allowNull: false,
         autonIncrement:true,
         primaryKey : true,
      },
      comment:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      user_id:{
         type:DataTypes.INTEGER,
         allowNull: false,
         autonIncrement:true,
      },
      recipe_id:{
         type:DataTypes.INTEGER,
         allowNull:false,
         autonIncrement: true,
      },
      posted_date: {
         type: DataTypes.DATE,
         allowNull: false,
      },
   },
   {
      sequelize,
      freezeTableName: true,      
      modelName:'Comment',
   }
   );
module.exports = Comment;
