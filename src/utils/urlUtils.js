const axios = require("axios");

const API_BASE = ".wikipedia.org/w/api.php?";
const queryApi = (lang = "en", params) => {
  const url = `https://${lang}${API_BASE}`;
  return axios
    .get(url, {
      params: {
        ...params
      }
    })
    .then(response => {
      if (response.data.error) {
        throw response.data.error.info;
      }
      return response.data;
    });
};

module.exports = {
  queryApi,
  API_BASE
};
