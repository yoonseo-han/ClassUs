//Functions related to user 
const {User} = require('../models/user');

const userController = {
    // Handle user creation
    createUser: async(req, res) => {
        console.log(req.body);
        // Get name, email, family name, profile picture from request
        // Information input from client
        const { name, email, familyName, profilePicture } = req.body;
        
        // Use sequelize function to find record
        User.create({
            name,
            email,
            familyName,
            profilePicture
        })
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        });
    }
}

module.exports = userController;