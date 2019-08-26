const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');


router.get('/', ctrl.city.index);
router.get('/:name', ctrl.city.show);
router.post('/', authRequired, ctrl.city.create);
router.post('/:_id', authRequired, ctrl.city.update);
router.delete('/:_id', authRequired, ctrl.city.del);


module.exports = router;
