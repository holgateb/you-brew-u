const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
   {
      id:{
         type:DataTypes.INTEGER,
         allowNull: false,
         autoIncrement:true,
         primaryKey : true,
      },
      comment:{
         type: DataTypes.STRING,
         allowNull: false,
         validate:{
            len:[4],
         }
      },
      user_id:{
         type:DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'user',
            key: 'id'
         }
         
      },
      recipe_id:{
         type:DataTypes.INTEGER,
         allowNull:false,
         references:{
            model:'recipe',
            key:'id'
         }        
      },
      posted_date: {
         type: DataTypes.DATE,
         allowNull: false,
      },
   },
   {
      sequelize,
      freezeTableName: true,      
      modelName:'comment',
   }
   );
module.exports = Comment;
