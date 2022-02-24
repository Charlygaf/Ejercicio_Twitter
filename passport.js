const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./schemas/User");
const bcryptjs = require("bcryptjs");
const { session } = require("passport");

module.exports = (app) => {
  app.use(passport.session());

  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password", passReqToCallback: true, session: true },
      async function verify(req, email, password, cb) {
        try {
          const user = await User.findOne({ email: email });
          const hashedPassword = user.password;
          const checkPassword = await bcryptjs.compare(password, hashedPassword);
          if (!user) {
            return cb(null, false, { message: "Incorrect email or password." });
          }

          if (!checkPassword) {
            return cb(null, false, { message: "Incorrect email or password." });
          }
          return cb(null, user);
        } catch (error) {
          return cb(error);
        }
      },
    ),
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id); //id de usuario en session al login
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id) //busca en bd a la persona que esta logueada (cada vez que se hace call a server)
      .then((user) => {
        done(null, user); // Usuario queda disponible en req.user.
      })
      .catch((error) => {
        done(error, user);
      });
  });
};
