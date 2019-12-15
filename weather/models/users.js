const db = require("../db/index");

exports.fetchUsers = () => {
  return db.query("SELECT * FROM users").then(({ rows }) => {
    return { total_users: rows.length, users: rows };
  });
};
