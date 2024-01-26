const router = require('express').Router();
const { Recipe, User } = require('../../models');
const multer  = require('multer');


/*const userData = await User.findOne(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
    });*/

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage });

router.post('/', upload.single("image") , async (req, res) => {
 console.log(req.session.user);
  try {
    const userId = await User.findOne({
      where: {
        email: req.session.user,
      },
    });

   console.log(userId);
    const newRecipe = await Recipe.create({
      user_id: 3,
      ...req.body,
    
    });

    console.log(req);

    res.status(200).json(newRecipe);
  } catch (err) {

    res.status(400).json(err);
  }
});

router.post('/:id', upload.single("image") , async (req, res) => {
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
