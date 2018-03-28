const express = require('express');
const router = express.Router();
const path = require('path');
const pg = require('../db/pgindex.js');
const redis = require('redis');
const REDIS_PORT = 6379;
const client = redis.createClient(REDIS_PORT);

router.use("/:id", express.static(path.join(__dirname, '../public')));

const cache = (req, res, next) => {
  const id = req.params.id;
  client.get(id, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
}

router.get('/:id/suggestions', cache, async (req, res) => {
  let result = await pg.search(req.params.id);

  client.setex(req.params.id, 60, JSON.stringify(result));
  res.send(result);
})

module.exports = router;