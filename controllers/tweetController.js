const Tweet = require("../schemas/Tweet");
const User = require("../schemas/User");

async function storeTweet(req, res) {
  try {
    const tweet = await Tweet.create({
      content: req.body.content,
      user: req.user,
    });
    await User.findByIdAndUpdate(req.user.id, { $push: { tweets: tweet } });
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
