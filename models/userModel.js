const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter your name!"],
  },
  email: {
    type: String,
    require: [true, "Please enter your email!"],
  },
  email: {
    type: String,
    require: [true, "Please enter your password!"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
