const User = require("../schemas/User");

async function index(req, res) {
  res.render("home");
}

async function show(req, res) {
  const { id } = req.params;
  const user = User.findById(id);
  res.render("profile", { user });
}

module.exports = {
  index,
  show,
};
