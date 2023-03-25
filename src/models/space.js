const {DataTypes} = require('sequelize');
const sequelize = require('../../config/database');

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
    }
}, {
    timestamps: true,
    tableName: 'spaces'
});

module.exports = Space;