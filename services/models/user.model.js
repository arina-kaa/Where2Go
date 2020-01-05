const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const userSchema = new Scheme({
  username: {
    type: String,
    //required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  first_name: {
    type: String,
    //required: true,
    trim: true
  },
  last_name: {
    type: String,
    trim: true
  },
  events: {
    type: Object
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;