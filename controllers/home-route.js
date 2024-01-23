const router = require('express').Router();
const {User} = require('../models/user');
const {Recipe} = require('../models/recipes');
const withAuth = require('../utils/auth');

router.get('/login', async (req, res) => {
try {
    res.render('login', {
       });
}  catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

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

router.get('/profile/:id', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
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

module.exports = router;