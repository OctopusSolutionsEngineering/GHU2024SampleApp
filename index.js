// index.js

const express = require('express');
const app = express();
const port = 8080;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Define a route that renders an HTML template
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});