const {SpcaeRole} = require('../models/SpaceRole');
const sequelize = require('../../config/database');

const spaceRoleController = {
    //Function to create new SpaceRole for a space
    assignSpaceRoleToUser : async(req, res) => {
        //Get necessary data from the request body
        const {userID, spaceID, } = req.body;
    },
}

module.exports = spaceRoleController;