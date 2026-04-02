// Mongoose model for SOP documents
const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  filename: String,
  uploadDate: { type: Date, default: Date.now },
  pages: Number,
  metadata: Object
});

module.exports = mongoose.model('Document', DocumentSchema);
