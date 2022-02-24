const User = require("../schemas/User");
const Tweet = require("../schemas/Tweet");

async function index(req, res) {
  const tweets = await Tweet.find().populate("user");
  res.render("home", { tweets });
}

async function show(req, res) {
  const { username } = req.params;
  const user = await User.findOne({ userName: `${username}` });
  const tweets = await Tweet.find().where({ user: user }).populate("user").limit(20);
  const users = await User.find();
  res.render("profile", { user, users, tweets });
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
  const newFollow = await User.findByIdAndUpdate(req.user.id, {
    $push: { following: req.body.objectId },
  });

  const newFollower = await User.findByIdAndUpdate(req.body.objectId, {
    $push: { followers: req.user.id },
  });
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
