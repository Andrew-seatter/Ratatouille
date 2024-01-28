const router = require('express').Router();
const { Recipe, User } = require('../../models');




router.post('/' , async (req, res) => {
 
  try {
    console.log(req.session.user_id);
    const newRecipe = await Recipe.create({
        user_id: req.session.user_id,
        author: req.body.author,
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        image: req.body.imaqe,
        
    });
    
    console.log(req);

    res.status(200).json(newRecipe);
  } catch (err) {

    res.status(400).json(err);
  }
});

router.post('/:id', async (req, res) => {
  try {
    console.log(req.session.user.id);
    const newRecipe = await Recipe.create({
      user_id: req.session.User.id,
      ...req.body,
    
    });

    console.log(req);

    res.status(200).json(newRecipe);
  } catch (err) {

    res.status(400).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const RecipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
  
    if (RecipeData) {
      res.status(404).json({ message: 'NoRecipe found with this id!' });
      return;
    }
  
    res.status(200).json(RecipeData);
  } catch (err) {
    res.status(500).json(err);
  }

});


module.exports = router;
