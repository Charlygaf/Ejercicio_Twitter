module.exports = async function authenticateUser(req, res, next) {
  // console.log(req.user);
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
};
