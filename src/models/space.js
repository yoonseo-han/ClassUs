const {DataTypes} = require('sequelize');
const sequelize = require('../../config/database');
const User = require('../models/user');

const Space = sequelize.define('space', {
    space_id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    space_role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    //Foreign key definition
    managerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
    //Specify the custom table name here
    tableName: 'space'
});

//Define relationship between user and space: connected by managerID
Space.belongsTo(User, { foreignKey: 'managerId' });
User.hasMany(Space, { foreignKey: 'managerId' });

module.exports = Space;