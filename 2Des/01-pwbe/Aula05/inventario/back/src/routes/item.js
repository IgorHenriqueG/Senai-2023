const express = require('express');
const router = express.Router();

const item = require('../controllers/item');

router.post('/item', item.create);
router.get('/item', item.read);
router.put('/item', item.update);
router.delete('/item/:id', item.del);

module.exports = router