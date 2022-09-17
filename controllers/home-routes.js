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

// recipe routes
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

router.post("/addrecipe", withAuth, async (req, res) => {
  
  await database.execute(`
  INSERT INTO Recipe (
    recipe_name,
    method,
    beer_style,
    hops,
    ingredients,
    image_url,
    user_id
  ) VALUES (
    @recipeName,
    @method,
    @beerStyle,
    @hops,
    @ingredients,
    @imageUrl,
    @userId
  )
  `,{
    recipeName: req.body.recipe_name,
    method: req.body.method,
    beerStyle: req.body.beer_style,
    hops: req.body.hops,
    ingredients: req.body.ingredients,
    imageUrl: imgUrl,
    userId: req.body.user_id
  });
  res.end("Added Recipe");
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