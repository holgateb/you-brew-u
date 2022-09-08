const router = require('express').Router();
const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipe-routes');
// const commentRoutes = require('./comment-routes');


router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);
// router.use('/comment', commentRoutes);


module.exports = router;
