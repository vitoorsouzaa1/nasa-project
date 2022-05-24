const mongoose = require('mongoose');

const lauchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  target: {
    type: String,
  },
  customers: [String],

  upcoming: {
    Boolean,
  },
  success: {
    Boolean,
  },
});

module.exports = mongoose.model('Launch', lauchesSchema);
