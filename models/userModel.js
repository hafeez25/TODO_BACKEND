const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

userSchema.pre("save", async (next) => {
  if (!this.isMofied("password")) {
    return next();
  }

  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
