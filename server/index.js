const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../client'));

let port = 9876;

app.listen(port, function() {
  console.log('listening on port ' + port);
});