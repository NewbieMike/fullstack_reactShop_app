const express = require('express');
const router = express.Router();

const Item = require('../models/item.model');

router.get('/items', async (req, res) => {
  try {
    const result = await Item.find();
    if(!result) res.status(404).json({ item: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/items/:id', async (req, res) => {
  try {
    const result = await Item
      .findById(req.params._id);
    if(!result) res.status(404).json({ item: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

// router.post('/items/add', async (req, res) => {
//   try {
//     const { _id, title, content, image, price } = req.body;
//     const newitem = new Item({ _id: _id, title: title, content: content, image:image, price: price });
//     await newitem.save();
//     res.json({ message: 'OK (Add new item done)'});
//   }
//   catch(err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;