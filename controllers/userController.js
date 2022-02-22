async function index(req, res) {
  res.render("home");
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
