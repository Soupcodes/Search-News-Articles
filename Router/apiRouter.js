const apiRouter = require("express").Router();
const newsRouter = require("./newsRouter");

// apiRouter.get("/", () => {
//   console.log("You are on the api Path");
// });
apiRouter.use("/", newsRouter);

module.exports = apiRouter;
