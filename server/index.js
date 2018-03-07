const express = require('express');
const app = express();
const router = require('./routes.js');

app.use(express.static('../public'));
app.use('/r', router);

let port = 3001;

app.listen(port, function() {
  console.log('listening on port ' + port);
});