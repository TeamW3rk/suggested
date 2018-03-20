const express = require('express');
const router = express.Router();
const path = require('path');
//const helper = require('../db/index.js');
const pg = require('../db/pgindex.js');

router.use("/:id", express.static(path.join(__dirname, '../public')));
// router.use('/:id', express.static('../public'));

//FOR MONGO

// router.get('/:id/suggestions', (req, res) => {
//   helper.find(req.params.id, function(restaurants) {
//     res.send(restaurants);
//   })
// })

//FOR PG

router.get('/:id/suggestions', async (req, res) => {
  let result = await pg.search(req.params.id, 'suggestedrestaurants');
  let suggested = result.suggestedrestaurants.map(id => pg.search(id));
  Promise.all(suggested).then((data) => {
    res.send({suggestedRestaurants: data});
  })
})

module.exports = router;