const mongoose = require('mongoose');


const User = mongoose.model('User', {
  email: {
    type: String,
    setRequired: true,
    minLength: 1,
    trim: true
  }
});

module.exports = { User };
