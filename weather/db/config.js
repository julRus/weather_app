const ENV = process.env.NODE_ENV || "development";
const development = {
  host: "localhost",
  database: "weather_app",
  port: 5432,
  username: "julia",
  password: "myPassword"
};
// const test = {
//   host: "localhost",
//   database: "",
//   port: 5432,
//   username: "julia",
//   password: "myPassword"
// };
const dbConfig = { development };
module.exports = dbConfig[ENV];
