const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    userName: String,
    photoProfile: { type: String, default: "defaultProfile.png" },
    email: String,
    photoCover: { type: String, default: "defaultCoverProfile.png" },
    description: String,
    followers: Array,
    following: Array,
    birthDate: Date,
    password: String,
    tweets: Array,
  },
  { timestamps: true },
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  user.password = await bcrypt.hash(user.password, 10);
  next();
});

userSchema.methods.validatePassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
