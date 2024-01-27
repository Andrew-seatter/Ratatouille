const router = require('express').Router();
const {User, Recipe, Comment} = require('../models/index');

const withAuth = require('../utils/auth');


//login page
router.get('/login', async (req, res) => {
try {
    res.render('login', {
       });
}  catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});


//home page
router.get('/', withAuth, async (req, res) => {
    try{
        const recipeDb = await Recipe.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ],
        });

        const recipes = recipeDb.map((recipe) =>
        recipe.get({plain: true}));

        res.render('home', {
            recipes,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//own person's profile route
router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          include: [{ model: Recipe }],
        });
    
        const user = userData.get({ plain: true });
    
        res.render('profile', {
          ...user,
          logged_in: true
        });
      } catch (err) {
        res.status(500).json(err)
      }
});


//someone else's profile route
router.get('/profile/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.body.id, {
          attributes: { exclude: ['password'] },
          include: [{ model: Recipe }],
        });
    
        const user = userData.get({ plain: true });
    
        res.render('profile', {
          ...user,
          logged_in: true
        });
      } catch (err) {
        res.status(500).json(err)
      }
});

//Allrecipes/Explore page
router.get('/explore', withAuth, async (req,res) => {
  try{
    
    const recipeDb = await Recipe.findAll({
      attributes : [
        'id',
        'author',
        'title',
        'ingredients',
        'instructions',
        'image',
        'comments'
      ],
     /* include: [
          {
              model: User,
              attributes: ['name']
          },
      ],*/
  });

  
  const recipes = recipeDb.map((recipe) =>
  recipe.get({plain: true}));
  console.log(recipes);

  res.render('explore', {
      recipes,
      loggedIn: req.session.loggedIn,
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

module.exports = router;


router.get('/post', withAuth, async (req, res) => {
  try{
    res.render('addRecipe', {
      loggedIn: req.session.loggedIn,
    });
  } catch {
    console.log(err);
    res.status(500),json(err);
  }
})