const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const eventSchema = new Scheme({
  createdBy: {
    type: String,
    required: true
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
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  shortDescription: {
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
    type: Object
  },
  ageLimit: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;