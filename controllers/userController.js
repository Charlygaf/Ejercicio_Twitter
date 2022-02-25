const User = require("../schemas/User");
const Tweet = require("../schemas/Tweet");

async function index(req, res) {
  const tweets = await Tweet.find().populate("user");
  const users = await User.find();

  res.render("home", { users, tweets });
}

async function show(req, res) {
  const { username } = req.params;
  const user = await User.findOne({ userName: `${username}` });
  const tweets = await Tweet.find().where({ user: user }).populate("user").limit(20);

  // Users sin usuario logeado ni followers actuales.
  const alreadyFollowing = user.following;
  const users = await User.find().where({ _id: { $ne: req.user.id }, alreadyFollowing });

  res.render("profile", { user, users, tweets });
  console.log(user);
  console.log(alreadyFollowing);
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
  res.render("register");
}

async function follow(req, res) {
  await User.findByIdAndUpdate(req.user.id, {
    $push: { following: req.body.objectId },
    function(err, result) {
      if (req.user.id === req.body.objectId) {
        res.send(err);
      } else {
        res.send(result);
      }
    },
  });
  await User.findByIdAndUpdate(req.body.objectId, {
    $push: { followers: req.user.id },
    function(err, result) {
      if (req.user.id === req.body.objectId) {
        res.send(err);
      } else {
        res.send(result);
      }
    },
  });
  res.redirect("back");
}

async function unfollow(req, res) {
  await User.findByIdAndUpdate(req.user.id, {
    $pull: { following: req.body.objectId },
  });
  await User.findByIdAndUpdate(req.body.objectId, {
    $pull: { followers: req.user.id },
  });
  res.redirect("back");
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
  follow,
  unfollow,
  store,
  logout,
};
