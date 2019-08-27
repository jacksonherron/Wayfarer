const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');




router.get('/', authRequired, ctrl.city.index);
router.get('/:name', authRequired, ctrl.city.show);
// router.post('/', ctrl.city.create);
// router.post('/:_id', ctrl.city.update);
// router.delete('/:_id', ctrl.city.del);


module.exports = router;
