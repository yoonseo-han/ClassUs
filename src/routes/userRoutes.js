const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to create a new user
router.post('/', userController.createUser);

// Route to get user profile by ID
router.get('/:id', userController.getUserById);

// Route to update user profile by ID
router.put('/:id', userController.updateUserById);

module.exports = router;