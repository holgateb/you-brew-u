const User = require('./User');
const Recipe = require('./Recipe')
const Comment = require('./Comment');

// Create associations

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    })

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    })

module.exports = { User, Recipe, Comment};
