const axios = require('axios')

const queryApi = (url, params) => {
  return axios.get(url, {
      params: {
        ...params
      }
    })
    .then((response) => {
      if (response.data.error) {
        throw response.data.error.info
      }
      return response.data
    })
};

module.exports = {
  queryApi
};