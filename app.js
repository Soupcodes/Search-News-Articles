const express = require("express");
const app = express();
const apiRouter = require("./Router/apiRouter");

app.set("view engine", "ejs");
// app.use(express.json());
app.use(express.static("/public"));

app.use("/api", apiRouter);

app.all("/*", (req, res, next) => {
  res.status(404).send({
    msg: `${res.statusCode}, oops something went wrong, please try again`
  });
});

app.use("/*", (err, req, res, next) => {
  res.status(404).send({
    msg: `${res.statusCode}`,
    err
  });
});

module.exports = app;
