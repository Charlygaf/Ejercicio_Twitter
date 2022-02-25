const { faker } = require("@faker-js/faker");
const User = require("../schemas/User");

faker.locale = "es";

module.exports = async () => {
  for (let i = 0; i < 3000; i++) {
    const random1 = faker.datatype.number({ min: 0, max: 3 });
    const random2 = faker.datatype.number({ min: 0, max: 10 });
    const user1 = await User.findOne().skip(random1);
    const user2 = await User.findOne().skip(random2);
    if (!user1.followers.includes(user2.id)) {
      await User.findByIdAndUpdate(user1.id, {
        $push: { followers: user2.id },
      });
      await User.findByIdAndUpdate(user2.id, {
        $push: { following: user1.id },
      });
    }
  }
  console.log("[Database] Se corrió el seeder de Follows.");
};
