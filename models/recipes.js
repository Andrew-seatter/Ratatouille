const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
{
   /* hooks: {
      beforeCreate: async (newRecipe) => {
        newRecipe.user_id = await User.findOne(req.body);
        req.session.save(() => {
          req.session.user_id = userData.id;
        });
      },

      beforeUpdate: async (updatedRecipe) => {
        updatedRecipe.user_id = await User.findOne(req.body);
        req.session.save(() => {
          req.session.user_id = userData.id;
        });
      },
    },*/
    sequelize,
    timestamps: false,
    underscores: true,
    freezeTableName: true,
    modelName: "Recipe",
  }
);

module.exports = Recipe;
