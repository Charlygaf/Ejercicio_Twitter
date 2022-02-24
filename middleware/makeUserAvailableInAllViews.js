module.exports = function makeUserAvailableInAllViews(req, res, next) {
  res.locals.currentUser = req.user;
  next();
};
