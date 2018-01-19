const {
  doSearch
} = require('./generators/search')

function search(searchTerm, lang = "en", options) {
  return doSearch(searchTerm, lang, options)
}

module.exports = {
  search
};