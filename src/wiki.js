const { doSearch, doRandom } = require("./generators/index");
const { queryApi } = require("./utils/urlUtils");
const convert = require("xml-js");

function search (searchTerm, lang = "en", options) {
  return doSearch(searchTerm, lang, options);
}

function random (lang = "en", options) {
  return doRandom(lang, options);
}

function featured (options = { feed: "potd" }) {
  const params = Object.assign({}, options, {
    action: "featuredfeed"
  });

  return queryApi("en", params).then(response => {
    if (response) {
      const json = convert.xml2js(response, { compact: false });
      if (json.elements && json.elements.length) {
        return json.elements[0];
      }
    }
  });
}

module.exports = {
  search,
  random,
  featured
};
