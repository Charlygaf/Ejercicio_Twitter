const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("./models");

module.exports = (app) => {
  app.use(passport.session());
  passport.use(
    new LocalStrategy({ usernameField: "email", passwordField: "password" }, async function verify(
      username,
      password,
      cb,
    ) {
      try {
        const user = await User.findOne({
          where: {
            email: username,
          },
        });
        console.log(user);
        if (!user) {
          return cb(null, false, { message: "Incorrect email or password." });
        }
        const result = await user.validPassword(password);
        console.log(result);
        if (!(await user.validPassword(password))) {
          return cb(null, false, { message: "Incorrect email or  password." });
        }
        return cb(null, user);
      } catch (error) {
        return cb(error);
      }

      // db.get('SELECT rowid AS id, * FROM users WHERE username = ?', [ username ], function(err, row) {
      //   if (err) { return cb(err); }
      //   if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

      //   crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
      //     if (err) { return cb(err); }
      //     if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
      //       return cb(null, false, { message: 'Incorrect username or password.' });
      //     }
      //     return cb(null, row);
      //   });
      // });
    }),
  );
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findByPk(id)
      .then((user) => {
        done(null, user); // Usuario queda disponible en req.user.
      })
      .catch((error) => {
        done(error, user);
      });
  });
};
