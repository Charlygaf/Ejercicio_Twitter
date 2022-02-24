const Tweet = require("../schemas/Tweet");

async function storeTweet(req, res) {
  console.log("hola");
  try {
    await Tweet.create({
      content: req.body.tweet,
      user: req.user.userName,
    });
    res.redirect("/home");
  } catch (error) {
    console.log("ERROR:", error.message);
  }
}

async function deleteTweet(req, res) {
  const { id } = req.params;
  await User.findByIdAndRemove(id);
  res.redirect("/home");
}

module.exports = {
  storeTweet,
  deleteTweet,
};
