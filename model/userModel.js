const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  password: String,
  profile_image: String,
});

const User = mongoose.model("model", userSchema);
module.exports = User;
