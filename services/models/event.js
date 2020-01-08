const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const eventSchema = new Scheme({
  title: {
    type: String,
    required: true
  },
  datetime: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  short_description: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  cost: {
    type: Number
  },
  tags: {
    type: Array
  },
  age_limit: {
    type: Number,
    required: true
  },
  likes_count: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;