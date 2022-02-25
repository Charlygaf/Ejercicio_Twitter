const { faker } = require("@faker-js/faker");
const User = require("../schemas/User");

faker.locale = "es";

module.exports = async () => {
  const users = [
    {
      firstname: "Test",
      lastname: "Prueba",
      photoProfile: "defaultProfile.png",
      email: "a@a.com",
      photoCover: "defaultCoverProfile.png",
      birthDate: faker.date.past(),
      password: "1",
      userName: "pepito",
      biography: "Hola que tal mi nombre es Test te invito a seguirme",
    },
  ];

  for (let i = 0; i < 50; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      photoProfile: "defaultProfile.png",
      photoCover: "defaultCoverProfile.png",
      birthDate: faker.date.past(),
      password: "1234",
      userName: faker.internet.userName(),
    });
  }

  await User.create(users);

  for (let i = 0; i < 200; i++) {
    const random = faker.datatype.number({ min: 0, max: 20 });
    const follower = await User.findOne().skip(random);
    /*     const fol = User.findOneAndUpdate({
      followers: follower,
    })
    ; */
    console.log(follower);
  }

  console.log("[Database] Se corrió el seeder de Users.");
};
