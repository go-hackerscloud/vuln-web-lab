# vulnerable

const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/', (req, res) => {
  res.render('sqli', { results: null });
});

router.post('/search', async (req, res) => {
  const q = req.body.q || '';
  // INTENTIONALLY vulnerable: string concatenation
  const sql = `SELECT id, title, content FROM posts WHERE title LIKE '%${q}%' LIMIT 50`;
  try {
    const rows = await db.all(sql);
    res.render('sqli', { results: rows });
  } catch(err) {
    // shows stack traces in development
    res.status(500).send(err.toString());
  }
});

module.exports = router;
