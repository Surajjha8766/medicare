const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  specialization: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true,
  },
  userType: {
    type: String,
    enum: ['doctor', 'patient'], // Fixed typo
    required: true,
  },

  userStatus: {
    type: Boolean,
    default: false,
  },
  paymentStatus: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("SignUp", userSchema);