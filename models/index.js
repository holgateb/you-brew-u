const User = require('./User');
const Recipe = require('./Recipe')
const Comment = require('./Comments');

// Create associations

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    
})

module.exports = { User, Recipe, Comment};
