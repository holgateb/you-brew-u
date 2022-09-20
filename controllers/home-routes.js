const router = require('express').Router();
const { User, Recipe, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Route "/"

// Route "/login"

router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({

      where: {
        user_id: req.session.user_id
      },
      include:[Comment]

       


      // attributes: [
      //   'id',
      //   'recipe_name',
      //   'beer_style',
      //   'image_url',
      //   'ingredients'
      // ]
    });

    const recipe = recipeData.map((project) => project.get({ plain: true }));
    console.log(recipe);
    console.log(recipe.comments);

    res.render('homepage', {
      recipe,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// recipe routes
router.get('/addrecipe', withAuth, async (req, res) => {
  try {
   
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

        const recipeData = await Recipe.findAll({
          where: {
            user_id: req.session.user_id
          },
          attributes: [
            "recipe_name",
            "method",
            "beer_style",
            "hops",
            "ingredients",
            "image_url",
          ],
          })

        const recipe = recipeData.map((project) => project.get({ plain: true }));

      res.render('dashboard', {
      user, recipe,
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