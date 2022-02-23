const User = require("../schemas/User");
const Tweet = require("../schemas/Tweet");
const { format: formatDate } = require("date-fns");
const { es } = require("date-fns/locale");

async function index(req, res) {
  res.render("userLogin");
}

async function show(req, res) {
  const { username } = req.params;
  const user = await User.findOne({ userName: `${username}` });
  res.render("profile", { user, formatDate, es });
}

async function logIn(req, res) {
  res.render("home");
}

async function create(req, res) {
  res.render("register");
}

async function store(req, res) {
  try {
    await User.create(req.body);
    res.redirect("/");
  } catch (err) {
    res.status(404);
  }
}

module.exports = {
  index,
  show,
  create,
  store,
  logIn,
};
