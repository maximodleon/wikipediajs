const { queryApi } = require("../utils/urlUtils");

const DEFAULT_PARAMS = {
  prop: "info",
  inprop: "url",
  format: "json",
  action: "query"
};

function doSearch (searchTerm, lang = "en", options = {}) {
  const params = _getParams(options, {
    gsrsearch: searchTerm,
    generator: "search"
  });

  return queryApi(lang, params).then(response => {
    return response;
  });
}

function doRandom (lang = "en", options = {}) {
  const params = _getParams(options, {
    generator: "random"
  });

  return queryApi(lang, params).then(response => {
    return response;
  });
}

function _getParams (queryOptions = {}, generatorOptions = {}) {
  return Object.assign({}, DEFAULT_PARAMS, queryOptions, generatorOptions);
}
module.exports = {
  doSearch,
  doRandom
};
