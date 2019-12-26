const db = require("../db/index");

exports.fetchUsers = () => {
  return db.query("SELECT * FROM users").then(({ rows }) => {
    return { total_users: rows.length, users: rows };
  });
};

exports.fetchUserByUsername = username => {
  return db
    .query("SELECT * FROM users WHERE username = $1;", [username])
    .then(({ rows }) => {
      return rows;
    });
};

exports.createUser = req => {
  console.log("HIYAA");
  const { username, firstname, lastname, email, password, img_url } = req.body;
  return db
    .query(
      "INSERT INTO users (username, firstName, lastName, email, password, img_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *; ",
      [username, firstname, lastname, email, password, img_url]
    )
    .then(({ rows }) => {
      return rows;
    });
};

exports.updateUser = req => {
  console.log(req.body);
};

// ("INSERT INTO areas (name) VALUES ($1) RETURNING *;");
