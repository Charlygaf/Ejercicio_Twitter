const User = require("../schemas/User");
const Tweet = require("../schemas/Tweet");
const { format: formatDate } = require("date-fns");
const { es } = require("date-fns/locale");

async function index(req, res) {
  res.render("home");
}

async function show(req, res) {
  const { username } = req.params;
  const user = await User.findOne({ userName: `${username}` });
  const users = await User.find({});
  res.render("profile", { user, formatDate, es, users });
}

async function store(req, res) {
  try {
    const user = await User.create(req.body);
    req.login(user, (error) => {
      if (error) {
        res.status(500).send("Lo sentimos, error inesperado.");
      }
      res.redirect("/");
    });
  } catch (error) {
    res.status(400).render("portal");
  }
}

async function logIn(req, res) {
  res.render("login");
}

async function create(req, res) {
  res.render("register");
}

async function following(req, res) {
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
  following,
};
