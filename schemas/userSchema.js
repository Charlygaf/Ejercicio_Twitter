const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  // rellernar user
});

const User = mongoose.model("User", userSchema);

module.exports = User;
