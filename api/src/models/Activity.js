const { DataTypes, Model } = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('activity',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            unique:true,
            allowNull:false
            
        },
        name:{
            type:DataTypes.STRING,
        },
        difficulty:{
            type:DataTypes.ENUM('1','2','3','4','5')
        },
        duration:{
            type:DataTypes.DECIMAL,
        },
        season:{
            type:DataTypes.ENUM('Summer','Autumn','Winter','Spring')
        }

    },{
        timestamps:false 
    })
}