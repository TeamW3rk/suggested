const express = require('express');
const app = express();
const router = require('./routes.js');

app.use(express.static(__dirname + '/../client'));
app.use('/r', router);

let port = 9876;

app.listen(port, function() {
  console.log('listening on port ' + port);
});