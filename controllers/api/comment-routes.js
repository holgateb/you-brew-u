const router = require('express').Router();
const { Comment } = require('../../models');

router.get("/", async (req, res) => {
    const comments = await Comment.findAll();

    res.json(comments)
})

module.exports = router;