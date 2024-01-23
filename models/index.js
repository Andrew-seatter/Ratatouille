const User = require('./user');
const Recipes = require('./recipes');
const Comments=require('./comments');

User.hasMany(Recipes, {
    foreignKey:'user_id',
    onDelete:'CASCADE'
});

Recipes.belongsTo(User,{
    foreignKey:'user_id',
});

User.hasMany(Comments,{
    foreignKey:'user_id',
    onDelete:'CASCADE'
});

Comments.belongsTo(User,{
    foreignKey:'user_id',

});

Recipes.hasMany(Comments,{
    foreignKey:recipe_id,
    onDelete:'CASCADE'

});

Comments.belongsTo(Recipes,{
    foreignKey:recipe_id,
})



module.exports= {User, Recipes,Comments}

