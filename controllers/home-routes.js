const router = require('express').Router();
const { User, Recipe } = require('../models');
const withAuth = require('../utils/auth');

// Route "/"

// Route "/login"

router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      
    });

    const recipe = recipeData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      recipe,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/addrecipe', withAuth, async (req, res) => {
  try {
    // const recipeData = await Recipe.findAll({
    //   where: {
    //     user_id: req.session.user_id
    //   },

    // });

    // const recipe = recipeData.map((project) => project.get({ plain: true }));

    res.render('addRecipe', {
      // recipe,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

// Route "/dashboard"

router.get('/dashboard', withAuth, async (req, res) => {
  try {
   
        const user = await User.findByPk(req.session.user_id, {
          attributes: [
            "id",
            "email",
          ],
          raw: true,
          nest: true,
        })
console.log(user);
      res.render('dashboard', {
      user,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route "/dashboard/new"

// Route "/dashboard/edit/:id"

// Route "/post/:id"

module.exports = router;