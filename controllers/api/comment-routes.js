const router = require('express').Router();
const withAuth = require("../../utils/auth");
const { Comment } = require('../../models');

// router.get("/", async (req, res) => {
//     const comments = await Comment.findAll();

//     res.json(comments)
// })

router.post("/", withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.body.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;