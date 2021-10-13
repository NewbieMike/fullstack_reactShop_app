const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  image: { type: String },
  price: { type: String },
});

module.exports = mongoose.model('Item', itemSchema);