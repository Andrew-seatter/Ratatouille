const User = require('./user');
const Recipes = require('./recipes');


User.hasMany(Recipes, {
    foreignKey:'user_id',
    onDelete:'CASCADE'
});

Recipes.belongsTo(User,{
    foreignKey:'user_id',
})

module.exports= {User, Recipes}