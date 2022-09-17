const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Recipe } = require("../../models");

router.get("/", withAuth, async (req, res) => {
    const recipes = await Recipe.findAll();

    res.json(recipes)
})

// localhost:3001/api/recipe
router.post("/",   async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.body.user_id,
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("/addrecipe", async (req, res) => {
  
//   await database.execute(`
//   INSERT INTO Recipe (
//     recipe_name,
//     method,
//     beer_style,
//     hops,
//     ingredients,
//     image_url,
//     user_id
//   ) VALUES (
//     @recipeName,
//     @method,
//     @beerStyle,
//     @hops,
//     @ingredients,
//     @imageUrl,
//     @userId
//   )
//   `,{
//     recipeName: req.body.recipe_name,
//     method: req.body.method,
//     beerStyle: req.body.beer_style,
//     hops: req.body.hops,
//     ingredients: req.body.ingredients,
//     imageUrl: imgUrl,
//     userId: req.body.user_id
//   });
//   res.end("Added Recipe");
//   // res.redirect('/');
// });

module.exports = router;
