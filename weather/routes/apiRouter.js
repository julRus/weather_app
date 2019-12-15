const apiRouter = require("express").Router();
const usersRouter = require("./usersRouter");

apiRouter.use("/users", usersRouter);

// Catches all invalid paths on the API route
apiRouter.get("/*", (req, res, next) => {
  res
    .status(404)
    .send({ msg: "Error 404 - Not found. Please check the url is valid" });
});

module.exports = apiRouter;
