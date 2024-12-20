const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [String],
  profile: {
    firstName: String,
    lastName: String,
    age: Number,
  },
  lastLogin: Date,
});

module.exports = mongoose.model("User", userSchema);
