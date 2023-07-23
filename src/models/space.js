const {DataTypes} = require('sequelize');
const sequelize = require('../../config/database');
const User = require('../models/user');
const SpaceRole = require('./SpaceRole');

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

User.belongsToMany(Space, { through: 'UserSpace', foreignKey: 'userId' });
Space.belongsToMany(User, { through: 'UserSpace', foreignKey: 'spaceId' });

// //Define relation between space and space role
// Space.hasMany(SpaceRole, { targetKey: 'name' });
// // Define the one-to-many association from SpaceRole to Space
// SpaceRole.hasMany(Space, { foreignKey: 'name' });

module.exports = Space;