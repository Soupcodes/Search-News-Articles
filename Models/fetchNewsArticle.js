const axios = require("axios");
const moment = require("moment");
const NewsAPI = require("newsapi");
const { newsApi } =
  process.env.NODE_ENV === "production" ? process.env : require("../config");
const newsapi = new NewsAPI(newsApi);

function fetchNewsArticle(search) {
  return newsapi.v2
    .everything({
      q: search,
      sources: "bbc-news, the-verge",
      domains: "bbc.co.uk, techcrunch.com",
      from: moment().add(-1, "days"),
      to: moment.now(),
      language: "en",
      sortBy: "relevancy",
      page: 1
    })
    .then(response => {
      if (!response.articles.length) return;
      else return response.articles.splice(0, 5);
    })
    .then(topFive => {
      const articles = topFive.map(article => {
        return {
          Source: article.source.name,
          Title: article.title,
          Description: article.description,
          Link: article.url
        };
      });
      return articles;
    })
    .then(result => result);
}

module.exports = { fetchNewsArticle };
