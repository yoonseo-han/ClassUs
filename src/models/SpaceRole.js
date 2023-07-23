const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const SpaceRole = sequelize.define('SpaceRole', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = SpaceRole;