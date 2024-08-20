const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

// Create the handlebars engine instance
const hbs = exphbs.create({
    defaultLayout: 'main', // Default layout if you use one
    extname: '.handlebars',
    layoutsDir: path.join(__dirname, 'views/layouts'),
});

// Set up handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views')); // Set views directory

// Serve static files
app.use(express.static(path.join(__dirname, 'static')));

// Routes
app.use('/', require(path.join(__dirname, 'routes/blog.js')));

// Start the server
app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`);
});
