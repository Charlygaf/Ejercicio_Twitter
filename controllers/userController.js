const res = require("express/lib/response");
const User = require("../schemas/User");

async function show() {
  const { id } = req.params;
  const user = User.findById(id);
  res.render("profile", { user });
}

module.exports = {
  show,
};
