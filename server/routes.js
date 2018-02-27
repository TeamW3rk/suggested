const express = require('express');
const router = express.Router();
const helper = require('../db/index.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/:id/suggestions', (req, res) => {
  helper.find(function(restaurant) {
    res.send(restaurant);
  })
})

module.exports = router;