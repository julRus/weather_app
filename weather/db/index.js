const { Client } = require("pg");
const dbConfig = require("./config");

const db = new Client(dbConfig);

db.connect()
  .then(() => {
    console.log("Server Running");
  })
  .catch(err => {
    console.log(err);
  });

module.exports = db;
