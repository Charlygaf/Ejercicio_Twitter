const { faker } = require("@faker-js/faker");
const { findOne } = require("../schemas/User");
const User = require("../schemas/User");

faker.locale = "es";

module.exports = async () => {
  for (let i = 0; i < 200; i++) {
    const random = faker.datatype.number({ min: 0, max: 20 });
    const follower = await User.findOne().skip(random);
    /*     const fol = User.findOneAndUpdate({
      followers: follower,
    })
    ; */
    console.log(follower);
  }
  console.log("[Database] Se corrió el seeder de Followers.");
};
