//Functions related to space 
const Space = require('../models/space');

const spaceController = {
    //Handle space related functions request
    createSpace : async(req, res) => {
        try {
            // Get the necessary data from the request body
            const { name, logo, space_role, userId } = req.body;
        
            // Create the space
            const space = await Space.create({
                name,
                logo,
                space_role,
                managerId: userId,
            });
        
            res.status(201).json(space);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    //Get space by its corresponding space id
    getSpaceByID: async(req, res) => {
        try {
            const spaceId = req.params.spaceID;
        
            // Find the space by ID and include the associated manager (user)
            const space = await Space.findByPk(spaceId, {
                include: {
                    association: 'manager',
                },
            });
        
            if (!space) {
                return res.status(404).json({ message: 'Space not found' });
            }
        
            res.status(200).json(space);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    //Delete space: Ensure that only user who created space can delete it
    deleteSpaceByID : async(req, res) => {
        try {
            //Get space id from parameter
            const spaceId = req.params.spaceID;
            //Get user id from req.body
            const userId = req.body.userId;

            // Find the space and check if the requesting user is the manager
            const space = await Space.findOne({
                where: {
                    space_id: spaceId,
                    managerId: userId,
                },
            });

            if (!space) {
                return res.status(404).json({ message: 'Space not found or unauthorized' });
            }

            // Delete the space
            await space.destroy();
            res.status(204).json();

        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

}

module.exports = spaceController;