const Sequelize=require("sequelize");
const sequelize=require('../util/database');
const User=sequelize.define("user",{
    id :{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    name : {
        type:Sequelize.STRING,
        allowNull:false,
    },
    mail : {
        type:Sequelize.STRING,
        allowNull:false,
    },
    phnumber :{
        type:Sequelize.CHAR,
        allowNull:false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    }
})
module.exports=User;