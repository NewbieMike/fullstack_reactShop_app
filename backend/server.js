const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const itemsRoutes = require('./routes/items.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', itemsRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ item: 'Not found...' });
});

/* REACT WEBSITE */

//Zmieni na build przed publikacja!
app.use(express.static(path.join(__dirname, '../public')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+port);
});
