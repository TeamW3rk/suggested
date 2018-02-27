const express = require('express');
const app = express();
const router = require('./routes.js');
const helper = require('../db/index.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('../public'));

app.get('/', (req, res) => {
  res.send(req.body)
})

app.use('/r', router);

let port = 3000;

app.listen(port, function() {
  console.log('listening on port ' + port);
});