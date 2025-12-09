# unsafe file upload

const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const UPLOAD_DIR = path.join(__dirname, '..', 'uploads');
const storage = multer.diskStorage({
  destination: UPLOAD_DIR,
  filename: (req, file, cb) => {
    // INTENTIONALLY unsafe filename usage (no sanitization)
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

router.get('/', (req, res) => res.render('upload'));
router.post('/', upload.single('file'), (req, res) => {
  res.send('Uploaded: ' + req.file.originalname);
});

module.exports = router;
