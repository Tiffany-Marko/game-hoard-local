const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Friends extends Model {}
// console.log(sequelize)
Friends.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
   
    
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'friends'
});

module.exports = Friends;
