const router = require('express').Router();
const { Recipe } = require('../../models/recipes');
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage });

router.post('/', upload.single("image") , async (req, res) => {
  try {
    console.log(req.session);
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    
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
