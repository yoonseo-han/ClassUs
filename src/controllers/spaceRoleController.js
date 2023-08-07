const {SpcaeRole} = require('../models/SpaceRole');
const sequelize = require('../../config/database');

const spaceRoleController = {
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

            if(user.user_role == 'TA' || user.user_role == 'Professor') {
                const roleId = 1;
                await user.addSpace(space, { through: { roleId } });
            } else {
                const roleId = 2;
                await user.addSpace(space, { through: { roleId } });
            }
            return true;
        } catch (error) {
            throw new Error('Failed to assign SpaceRole to User within Space.');
        }
    },
}

module.exports = spaceRoleController;