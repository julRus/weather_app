const express = require("express");

const apiRouter = require("./routes/apiRouter");
const app = express();

app.use(express.json());

app.use("/api", apiRouter);

// app.use((err, req, res, next) => {
//   if (err.status === 404 && err.msg) {
//     res.status(404).send({ msg: err.msg });
//   }
//   if (err.status === 400 && err.msg) {
//     res.status(400).send({ msg: err.msg });
//   } else res.status(500).send({ msg: "There has been an error :-(" });
// });

module.exports = app;
