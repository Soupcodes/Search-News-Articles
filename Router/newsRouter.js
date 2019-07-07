const newsRouter = require("express").Router();
const { getNewsArticle } = require("../Controller/getNewsArticle");

newsRouter.route("/news/:search").get(getNewsArticle);

module.exports = newsRouter;
