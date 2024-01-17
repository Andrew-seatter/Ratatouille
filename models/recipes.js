const{Model,DataTypes}=require('sequelize');
const sequelize=require('../config/connecetion');

class Recipe extends Model{}

Recipe.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    comments:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'user',
            key:'id',
        },
    },
},
{
    sequelize,
    timestamps:false,
    underscores:true,
    freezeTableName:true,
    modelName:'Recipe',
});