const express = require('express');
const app = express();
const path = require("node:path");

// Webserver Options
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './website'));

// Routes
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// Express Listen
app.listen(config.webserver.port, () => {
  console.log('[SDJSB]: Server listening on port 3000');
});
