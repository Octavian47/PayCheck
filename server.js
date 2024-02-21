//ENV
require('dotenv').config();

//APP Config
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT

//TEST AUTO DEPLOYY

// Middleware to parse JSON bodies
app.use(express.json());

//Middleware to use cors
app.use(cors());


// Import the routes
const authRoutes = require('./routes/auth');
const webhookRoute = require('./routes/webhookRoutes');
const userRoutes = require('./routes/userRoutes');

// Use the imported routes with their respective base paths
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use(webhookRoute);


// Serve static files from the 'public' directory
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
