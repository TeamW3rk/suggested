const express = require('express');
const app = express();
const helper = require('../db/index.js');
const router = require('./routes.js');

app.use(express.static('../public'));
app.use('/r', router);

let port = 3000;

app.listen(port, function() {
  console.log('listening on port ' + port);
});