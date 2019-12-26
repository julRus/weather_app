// process.env.NODE_ENV = "test";
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
const connection = require("../db/config");

describe("/api", () => {
  beforeEach(() => {
    return connection.seed.run();
  });
  after(() => {
    return connection.destroy();
  });
  describe("/users", () => {
    it("GET:200 - Returns all users from users table", () => {
      return request(app)
        .get("/api/users")
        .expect(200)
        .then(({ body: { users } }) => {
          expect(users).to.be.an("array");
        });
    });
  });
});
