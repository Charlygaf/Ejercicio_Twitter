const User = require("../schemas/User");

async function index(req, res) {
  res.render("home");
}

async function show(req, res) {
  const { id } = req.params;
  const user = User.findById(id);
  res.render("profile", { user });
}

async function create(req, res) {
  res.render("register");
}

async function store(req, res) {
  try {
    await User.create(req.body);
    res.redirect("/home");
  } catch (err) {
    res.status(404);
  }
}

module.exports = {
  index,
  show,
  create,
  store,
};
