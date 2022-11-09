const { Model, DataTypes, Sequelize} = require('sequelize');
const sequelize = require('../config/connection');

class Collection extends Model {}
// console.log(sequelize)
Collection.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
      
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'collection'
    });
    module.exports = Collection;