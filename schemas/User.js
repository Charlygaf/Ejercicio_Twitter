const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  photoProfile: String,
  email: String,
  photoCover: String,
  description: String,
  followers: Array,
  follows: Array,
  birthDate: Date,
  createdAt: Date,
  password: String,
  twitsCount: Number,
});

const User = mongoose.model("User", userSchema);

User.create({
  firstname: "Prueba",
  lastname: "Prueba",
  photoProfile: "defaultProfile.png",
  email: "a@a.com",
  photoCover: "defaultCoverProfile.png",
  description: "",
  followers: [{}],
  follows: [{}],
  birthDate: new Date(12 / 3 / 2002),
  createdAt: new Date(12 / 1 / 2022),
  password: "1",
  twitsCount: 0,
});

module.exports = User;
