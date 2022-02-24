const User = require("../schemas/User");
const Tweet = require("../schemas/Tweet");

async function index(req, res) {
  res.render("home");
}

async function show(req, res) {
  const { username } = req.params;
  const user = await User.findOne({ userName: `${username}` });
  const users = await User.find({});
  res.render("profile", { user, users });
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

async function create(req, res) {
  if (!req.user) {
    res.render("register");
  } else {
    res.redirect("/");
    console.log("el usuario ya esta registrado");
  }
}

async function following(req, res) {
  console.log(req.user);
  console.log(req.body);
  console.log(req.params);
}

async function logout(req, res) {
  try {
    req.logout();
    res.redirect("/");
  } catch (error) {
    res.status(400);
  }
}

module.exports = {
  index,
  show,
  create,
  store,
  following,
  logout,
};
