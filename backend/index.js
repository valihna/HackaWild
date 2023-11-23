/* eslint-disable no-undef */
const fs = require("fs");
const { faker } = require("@faker-js/faker");

function createRandomUser() {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

const USERS = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

console.log({ users: USERS });
fs.writeFileSync("./db.json", JSON.stringify({ users: USERS }));
