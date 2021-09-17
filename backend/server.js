const express = require('express');
const cors = require('cors');
const path = require('path');


const itemsRoutes = require('./routes/posts.routes');
const connectDB = require('./config/db');

require('dotenv').config();

connectDB();
const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.json({ message: 'API running...' });
});

/* API ENDPOINTS */
app.use('/api', itemsRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
//ZMIANA NA BUILD PRZY PROJEKCIE PRODUKCYJNYM!
app.use(express.static(path.join(__dirname, '../public')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+port);
});
