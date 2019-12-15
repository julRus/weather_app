const { fetchUsers } = require("../models/users");

exports.getUsers = (req, res) => {
  fetchUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).send({ status: 500, msg: "Internal Server Error" });
    });
};
