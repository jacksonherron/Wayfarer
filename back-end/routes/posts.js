const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

router.get('/', authRequired, ctrl.post.index);
router.get('/:_id', authRequired, ctrl.post.show);
router.post('/', authRequired, ctrl.post.create);
router.put('/:_id', authRequired, ctrl.post.update);
router.delete('/:_id', authRequired, ctrl.post.del);


module.exports = router;