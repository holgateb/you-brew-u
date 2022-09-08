const User = require('./User');
const Recipe = require('./Recipe')

// Create associations
Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    
})

module.exports = { User, Recipe };
