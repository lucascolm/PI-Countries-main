const { DataTypes, Model } = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('activity',{
        // id:{
        //     type:DataTypes.UUID, 
        //     defaultValue: DataTypes.UUIDV4,
        //     primaryKey: true,
        //     allowNull: false
            
        // },
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