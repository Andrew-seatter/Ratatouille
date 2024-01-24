const router = require('express').Router();

const userRoutes = require('./user-route');

const recipeRoutes = require('./recipe-route');

router.use('/recipe', recipeRoutes)

router.use('/users', userRoutes);

module.exports = router;
