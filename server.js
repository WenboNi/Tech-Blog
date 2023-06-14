// Dependecies
const express = require('express');
const seed = require('./seed');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/routes'));

// Starts server on PORT 3001 to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });