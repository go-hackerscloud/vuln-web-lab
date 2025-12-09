# weak auth

const express = require('express');
const router = express.Router();
const db = require('../db/db'); // small helper to open sqlite

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // INTENTIONALLY INSECURE: plaintext password compare
  const row = await db.get(`SELECT username, password FROM users WHERE username='${username}'`);
  if (row && row.password === password) {
    // predictable cookie value
    res.cookie('user', username, { httpOnly: false });
    return res.redirect('/');
  }
  res.status(401).send('Invalid');
});

module.exports = router;
