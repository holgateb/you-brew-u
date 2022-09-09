const router = require('express').Router();
const { Recipe } = require('../../models');

router.get("/", async (req, res) => {
    const recipes = await Recipe.findAll();

    res.json(recipes)
})

module.exports = router;