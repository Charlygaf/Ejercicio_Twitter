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

  for (let i = 0; i < 3; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      birthDate: faker.date.past(),
      password: "1234",
      userName: faker.internet.userName(),
    });
  }

  await User.create(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
