const publicRoutes = require("./publicRoutes");
const userRoutes = require("./userRoutes");
const makeUserAvailableInAllViews = require("../middleware/makeUserAvailableInAllViews");
const makeDateAvailableInAllViews = require("../middleware/makeDateAvailableInAllViews");

module.exports = (app) => {
  app.use(makeUserAvailableInAllViews);
  app.use(makeDateAvailableInAllViews);
  app.use(publicRoutes);
  app.use(userRoutes);
};
