const express = require('express');
const router = express.Router();

// Get a single fruit by id
router.get('/order', (req, res, next) => {
  res.send({
    success: false,
    message: 'yoo ca se passe',
    test: ok
  });
});
  module.exports = router;