const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const eventSchema = new Scheme({
  created_by: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  datetime: {
    type: Date,
    required: true
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  short_description: {
    type: String
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
    type: String
  },
  likes_count: {
    type: Number
  },
  image_path: {
    type: String
  }
}, {
  timestamps: true
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;