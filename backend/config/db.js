require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.once('open', () => {
      console.log('Successfully connected to the database');
    });
  } catch (error) {
    const db = mongoose.connection;
    db.on('error', err => console.log('Error: ' + err));
  }
};

module.exports = connectDB;