const usersRouter = require("express").Router();
const {
  getUsers,
  getUserByUsername,
  postUser,
  deleteUser
} = require("../controllers/users");

usersRouter
  .route("/")
  .get(getUsers)
  .post(postUser);
// .post(postUser);
// .patch(patchUser);

usersRouter.route("/:username").get(getUserByUsername);
// .delete(deleteUser);

// const {
//   getAreas,
//   postArea,
//   getRestaurantsByAreaId,
//   postRestaurantInArea
// } = require("../controllers/areas");

// areasRouter
//   .route("/")
//   .get(getAreas)
//   .post(postArea);

// areasRouter
//   .route("/:area_id/restaurants")
//   .get(getRestaurantsByAreaId)
//   .post(postRestaurantInArea);

module.exports = usersRouter;
