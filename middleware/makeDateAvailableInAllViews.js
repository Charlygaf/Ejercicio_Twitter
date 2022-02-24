const { format: formatDate } = require("date-fns");
const { es } = require("date-fns/locale");

module.exports = function makeUserAvailableInAllViews(req, res, next) {
  res.locals.formatDate = formatDate;
  res.locals.es = es;
  next();
};
