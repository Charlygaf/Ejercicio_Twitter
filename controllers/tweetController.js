async function storeTweet(req, res) {
  try {
    await User.create(req.body);
    res.redirect("/home");
  } catch (err) {
    res.status(404);
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
