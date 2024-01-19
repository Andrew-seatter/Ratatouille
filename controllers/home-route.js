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

router.get('/home', async (req, res) => {
    try{
        const recipeDb = await Recipe.findAll({
            include: [
                {
                    model: 
                }
            ]
        })
    }
})