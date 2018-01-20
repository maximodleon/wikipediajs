const {
  doSearch,
  doRandom
} = require('./generators/index')

function search(searchTerm, lang = "en", options) {
  return doSearch(searchTerm, lang, options)
}

function random(lang = "en", options) {
  return doRandom(lang, options)
}

module.exports = {
  search,
  random
};