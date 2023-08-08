const {SpcaeRole} = require('../models/SpaceRole');
const sequelize = require('../../config/database');

const spaceRoleController = {
    // Function to get the assigned RoleID of a User within a Space
    getRoleIdByRoleName : async(roleName) => {
        try {
            //Return roleID based on role Name
            const spaceRole = await SpaceRole.findOne({ where: { roleName } });
            if (!spaceRole) {
                throw new Error('Role not found.');
            }
            return spaceRole.id; // Return the roleId
        } catch (err) {
            throw new Error('Failed to get roleId by roleName.');
        }
    },

    //Function to create new SpaceRole for a space
    assignSpaceRoleToUser : async(req, res) => {
        try {
            //Get necessary data from the request body
            const {userID, spaceID } = req.body;

            //Assign role based on user id and user name
            const user = await User.findByPk(userId);
            const space = await Space.findByPk(spaceId);

            //Error handling
            if (!user || !space) {
                throw new Error('User, Space, or SpaceRole not found.');
            }

            let roleName; // Determine roleName based on userRole
            if(user.user_role == 'TA' || user.user_role == 'Professor') {
                roleName = 'Manager'; 
            } else if(user.user_role == 'Student') {
                roleName = 'Normal User'; 
            } else {
                throw new Error('Invalid user_role.');
            }
            const roleId = await getRoleIdByRoleName(roleName);
            await user.addSpace(space, { through: { roleId } });

            return true;
        } catch (error) {
            throw new Error('Failed to assign SpaceRole to User within Space.');
        }
    },

}

module.exports = spaceRoleController;