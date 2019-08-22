const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

router.get('/', ctrl.Ctrl.index);
router.get('/:_id', ctrl.postController.show);
router.post('/', ctrl.postController.new);
router.post('/:_id', ctrl.postController.update);
router.delete('/:_id', ctrl.postController.delete);
