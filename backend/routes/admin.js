// Admin routes for uploading and managing SOPs
const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Upload endpoint
router.post('/upload', upload.single('file'), (req, res) => {
  // TODO: Parse PDF, chunk, embed, store in DB
  res.json({ message: 'File uploaded', file: req.file });
});

module.exports = router;
