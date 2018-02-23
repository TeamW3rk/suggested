const express = require('express');
const router = express.Router();

router.get('/:id/suggestions', (req, res) => {
  res.send('In suggestions endpoint ' + req.params.id);
})

module.exports = router;