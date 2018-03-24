const express = require('express');
const router = express.Router();
const path = require('path');
const pg = require('../db/pgindex.js');

router.use("/:id", express.static(path.join(__dirname, '../public')));

router.get('/:id/suggestions', async (req, res) => {
  let result = await pg.search(req.params.id);
  res.send(result);
})

module.exports = router;