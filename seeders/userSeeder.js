const { faker } = require("@faker-js/faker");
const User = require("../schemas/User");

faker.locale = "es";

module.exports = async () => {
  const users = [
    {
      firstname: "Prueba",
      lastname: "Prueba",
      photoProfile: "defaultProfile.png",
      email: "a@a.com",
      photoCover: "defaultCoverProfile.png",
      birthDate: faker.date.past(),
      password: "1",
      userName: "@" + "pepito",
    },
  ];

  for (let i = 0; i < 3; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      photoProfile: "defaultProfile.png",
      email: faker.internet.email(),
      photoCover: "defaultCoverProfile.png",
      birthDate: faker.date.past(),
      password: "1234",
      userName: "@" + faker.internet.userName(),
    });
  }

  await User.create(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
