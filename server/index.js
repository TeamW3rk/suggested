const nr = require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes.js');

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.use('/r', router);

let port = 3001;

app.listen(port, function() {
  console.log('listening on port ' + port);
});