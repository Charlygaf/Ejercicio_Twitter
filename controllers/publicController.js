async function index(req, res) {
  res.render("portal");
}

async function create(req, res) {
  res.render("register");
}

module.exports = {
  index,
  create,
};
