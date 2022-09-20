const router = require('express').Router();
const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipe-routes');

router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);

module.exports = router;
