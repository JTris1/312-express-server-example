// Import Express
const express = require('express');
const path = require('path');
const { send } = require('process');

// Define our Express app
const app = express();
const port = 3000;

// Define our routes
// Listening for a GET req for out root (localhost:3000/)
app.get('/', (req, res) => {
    // res.send("Hello Express!");
    res.sendFile(path.join(__dirname + "/views/index.html")); // __dirname means current directory
});

// Listening for a GET req for out about page (localhost:3000/about)
app.get('/about', (req, res) => {
    // res.send("Hello Express!");
    res.sendFile(path.join(__dirname + "/views/about.html")); // __dirname means current directory
});

// Listening for a GET req for out about page (localhost:3000/contact)
app.get('/contact', (req, res) => {
    // res.send("Hello Express!");
    res.sendFile(path.join(__dirname + "/views/contact.html")); // __dirname means current directory
});

// Set our app to listen
app.listen(port, () => {
    console.log(`Express App listening on port ${port}`);
});