const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/', ctrl.post.index);
router.get('/:_id', ctrl.post.show);
router.post('/', ctrl.post.create);
router.put('/:_id', ctrl.post.update);
router.delete('/:_id', ctrl.post.del);


module.exports = router;