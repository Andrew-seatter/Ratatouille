const{Model,DataTypes}=require('sequelize');
const bcrypt = require('bcrypt');
const sequelize=require('../config/connecetion');

class User extends Model{
    checkPassword(loginpassword){
        return bcrypt.compareSync(loginpassword,this.password);
    }
}

User.init({
    id:{
        type:DataTypes.Integer,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true,
        },
    },
    bio: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8],
        },

    },
},
{
    hooks:{

        beforeCreate: async(newUserData)=>{
            newUserData.password= await bcrypt(newUserData.password,10);
            return newUserData;
        },

        beforeUpdate:async(updateUserData)=>{
            updateUserData.password=await bcrypt(updateUserData.password,10);
            return updateUserData;
        }
    },
    sequelize,
    timestamps:false,
    freezeTableName:true,
    underscored:true,
    modelName:'user',
});

model.exports=User;