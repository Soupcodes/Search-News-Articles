const { fetchNewsArticle } = require("../Models/fetchNewsArticle");

const getNewsArticle = (req, res, next) => {
  const { search } = req.params;
  fetchNewsArticle(search).then(response => res.status(200).send(response));
};

module.exports = { getNewsArticle };
