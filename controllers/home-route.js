const router = require('express').Router();
const {Recipe} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
try {
    res.render('login', {
       });
}  catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

router.get('/home', withAuth, async (req, res) => {
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
        res.status(500),json(err);
    }
});

router.get('/user/:id', withAuth, async (req, res) => {
    const userDb = await User.findbyPk(req.params.id);

    const user = userDb.get
})

module.exports = router;