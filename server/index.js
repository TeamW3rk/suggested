const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes.js');

app.use(express.static(path.join(__dirname, '../public')));

app.use('/r', router);

let port = 3001;

app.listen(port, function() {
  console.log('listening on port ' + port);
});