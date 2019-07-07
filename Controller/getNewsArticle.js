const { fetchNewsArticle } = require("../Models/fetchNewsArticle");

const getNewsArticle = (req, res, next) => {
  const { search } = req.params;
  return fetchNewsArticle(search)
    .then(response => {
      const art1 = response[0];
      const art2 = response[1];
      const art3 = response[2];
      const art4 = response[3];
      const art5 = response[4];
      return Promise.all([art1, art2, art3, art4, art5]);
    })
    .then(([art1, art2, art3, art4, art5]) => {
      const article1 = JSON.stringify(art1, null, 2);
      const article2 = JSON.stringify(art2, null, 2);
      const article3 = JSON.stringify(art3, null, 2);
      const article4 = JSON.stringify(art4, null, 2);
      const article5 = JSON.stringify(art5, null, 2);
      res.status(200).render("articles", {
        article1,
        article2,
        article3,
        article4,
        article5
      });
    })
    .catch(error => {
      console.log(error);
      next();
    });
};

module.exports = { getNewsArticle };
