// index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route that renders an HTML template
app.get('/', (req, res) => {
    res.render('index', { message: process.env.TITLE || 'Hello World!' });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});