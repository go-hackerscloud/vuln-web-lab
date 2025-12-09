const express = require('express');
const router = express.Router();

router.get('/debug', (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    res.send({
      env: process.env,
      cookies: req.cookies
    });
  } else {
    res.status(403).send('Forbidden');
  }
});

module.exports = router;
