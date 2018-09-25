const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});

module.exports = User = mongoose.model("users", userSchema);
