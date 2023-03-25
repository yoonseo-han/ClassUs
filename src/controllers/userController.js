//Functions related to user 
const User = require('../models/user');

const userController = {
    // Handle user creation
    createUser: async(req, res) => {
        // Get name, email, family name, profile picture from request
        // Information input from client
        const { id, name, email, familyName, profilePicture } = req.body;
        //console.log(typeof(User));
        // Use sequelize function to find record
        User.sync({force: true}).then(() => {
            return User.create({
                id,
                name,
                email,
                familyName,
                profilePicture
            })
        })
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        });
    },

    //Function to get user profile by id
    getUserById: async(req, res) => {
        const { id } = req.params;

        try {
            const user = await User.findOne({ where: { id } });
            if(!user) return res.status(404).json({ message: 'User not found' });

            return res.status(200).json(user);
        } catch(err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    }
}

module.exports = userController;