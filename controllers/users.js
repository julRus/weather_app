const {
  fetchUsers,
  fetchUserByUsername,
  createUser,
  updateUser
} = require("../models/users");

exports.getUsers = (req, res) => {
  fetchUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ status: 500, msg: "Internal Server Error" });
    });
};

exports.getUserByUsername = (req, res) => {
  console.log(req.params);
  fetchUserByUsername(req).then(user => {
    res.status(200).json(user);
  });
};

exports.postUser = (req, res) => {
  createUser(req)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ msg: "ERRRRR" });
    });
};

exports.patchUser = (req, res) => {
  updateUser(req).then(user => {
    res.status(200).json(user);
  });
};

// exports.deleteUser = (req, res) => {
//   const {username} = req.params
//   removeUser()
// }
