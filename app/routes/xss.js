# stored XSS

const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/', async (req, res) => {
  const comments = await db.all("SELECT id, author, comment FROM comments ORDER BY id DESC LIMIT 50");
  res.render('xss', { comments });
});

router.post('/comment', async (req, res) => {
  const { author, comment } = req.body;
  // INTENTIONALLY not sanitizing input (stored XSS)
  await db.run(`INSERT INTO comments (author, comment) VALUES ('${author}', '${comment}')`);
  res.redirect('/xss');
});

module.exports = router;
