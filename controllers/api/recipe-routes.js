const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Recipe } = require("../../models");

// router.get("/", async (req, res) => {
//     const recipes = await Recipe.findAll();

//     res.json(recipes)
// })

// localhost:3001/api/recipe
router.post("/", withAuth,  async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
