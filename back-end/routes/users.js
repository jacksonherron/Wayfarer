const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// NOTE Endpoint 'api/v1/users

// Get User Profile
router.get('/:_id', ctrl.users.show);
router.get('/', ctrl.users.index);
router.put('/:_id', authRequired,  ctrl.users.update);





module.exports = router;