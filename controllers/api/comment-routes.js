const router = require('express').Router();
const withAuth = require("../../utils/auth");
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
    const comments = await Comment.findAll();

    res.json(comments)
})
//Get All comments
// router.get("/", (req, res) =>{
//    Comment.findAll()
//   .then((dbCommandDate) => res.json(dbCommandDate))
//   .catch(err =>{
//     console.log(err);
//     res.status(500).json(err);
//   });
//  });

//Create comments

router.post("/", withAuth, (req,res) =>{
  //Check for a seesion
  if(req.session){
    Comment.create({
      comment: req.body.comment,
      user_id: req.body.user_id,
      recipe_id: req.body.recipe_id,
      posted_date: req.body.posted_date
    })
    .then(dbCommandDate =>res.json(dbCommandDate))
    .catch(err =>{
      console.log(err);
      res.status(400).json(err);
    });
  }
});
router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;