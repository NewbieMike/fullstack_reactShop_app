const express = require('express');
const router = express.Router();
const {
  getItems,
  getItemById,
} = require('../controller/itemControllers');

router.get('/', getItems);

router.get('/:id', getItemById);

module.exports = router;
