const usersRouter = require("express").Router();
const { getUsers } = require("../controllers/users");

usersRouter.route("/").get(getUsers);

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
