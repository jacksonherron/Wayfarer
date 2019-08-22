const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');


router.get('/', ctrl.city.index);
router.get('/:_id', ctrl.city.show);
router.post('/', ctrl.city.create);
router.post('/:_id', ctrl.city.update);
router.delete('/:_id', ctrl.city.del);


module.exports = router;
