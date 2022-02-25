const { faker } = require("@faker-js/faker");
const { following } = require("../controllers/userController");
const { updateMany } = require("../schemas/User");
const User = require("../schemas/User");

faker.locale = "es";

module.exports = async () => {
  for (let i = 0; i < 200; i++) {
    const random = faker.datatype.number({ min: 0, max: 3 });
    const followers = await User.findOne().skip(random);
    updateMany.User({
      followers: followers,
    });
  }
  console.log("[Database] Se corrió el seeder de Followers.");
};
