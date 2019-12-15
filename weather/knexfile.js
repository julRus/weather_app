const { DB_URL } = process.env;
const ENV = process.env.NODE_ENV || "development";

const baseConfig = {
  client: "pg"
};

const customConfig = {
  development: {
    connection: {
      database: "weather_app",
      username: "julia",
      password: "myPassword"
      // user,
      // password
    }
  },
  production: {
    connection: `${DB_URL}?ssl=true`
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
