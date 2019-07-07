const axios = require("axios");
const moment = require("moment");
const NewsAPI = require("newsapi");
const { newsApi } = require("../config");
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
      const topFive = response.articles.splice(0, 5);
      topFive.forEach(article => {
        console.log({
          Source: article.source.name,
          Title: article.title,
          Description: article.description,
          Link: article.url,
          Content: article.content
        });
      });
    });
}

module.exports = { fetchNewsArticle };
