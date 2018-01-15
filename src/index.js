const axios = require("axios");
const { getRequestUrl, DEFAULT_SEARCH_PARAMS } = require("./utils/urlUtils");

function search(searchTerm, lang = "en", options) {
  const url = getRequestUrl(lang);
  const requestOptions = Object.assign({}, options, DEFAULT_SEARCH_PARAMS, {
    gsrsearch: searchTerm
  });

  return axios
    .get(url, {
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      params: {
        ...requestOptions
      }
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}

module.exports = {
  search
};
