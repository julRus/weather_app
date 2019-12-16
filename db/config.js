const { DATABASE_URL } = process.env;

const ENV = process.env.NODE_ENV || "development";
const development = {
  host: "localhost",
  database: "weather_app",
  port: 5432,
  username: "julia",
  password: "myPassword"
};

const production = `${DATABASE_URL}?ssl=true`;

// const test = {
//   host: "localhost",
//   database: "",
//   port: 5432,
//   username: "julia",
//   password: "myPassword"
// };
const dbConfig = { development, production };
module.exports = dbConfig[ENV];
