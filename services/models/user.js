const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const userSchema = new Scheme({
  first_name: {
    type: String,  
    trim: true
  },
  last_name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  created_events: {
    type: Object,
    default: {}
  },
  liked_events: {
    type: Object,
    default: {}
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;