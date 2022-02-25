const { faker } = require("@faker-js/faker");
const Tweet = require("../schemas/Tweet");
const User = require("../schemas/User");

faker.locale = "es";

module.exports = async () => {
  for (let i = 0; i < 50; i++) {
    const random1 = faker.datatype.number({ min: 0, max: 3 });
    const random2 = faker.datatype.number({ min: 0, max: 10 });
    const tweet = await Tweet.findOne().skip(random1);
    const user = await User.findOne().skip(random2);
    if (!tweet.likes.includes(user)) {
      await Tweet.findByIdAndUpdate(tweet, {
        $push: { likes: user },
      });
      await User.findByIdAndUpdate(user, {
        $push: { likes: tweet },
      });
    }
  }
  console.log("[Database] Se corrió el seeder de Likes.");
};
