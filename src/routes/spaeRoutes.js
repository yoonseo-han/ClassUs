const express = require('express');
const router = express.Router();
const spaceController = require('../controllers/spaceController');

// Route to create new space
router.post('/', spaceController.createSpace);

// Router to get space by its associated space id
router.get('/:spaceID', spaceController.getSpaceByID);

// Rotuer to get space based on ID
router.delete('/:spaceID', spaceController.deleteSpaceByID);

module.exports = router;