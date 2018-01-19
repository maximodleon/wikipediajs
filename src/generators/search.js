const {
    queryApi
} = require('../utils/urlUtils')

const DEFAULT_SEARCH_PARAMS = {
    prop: 'info',
    inprop: 'url',
    format: 'json'
}

const SEARCH_API_BASE =
    ".wikipedia.org/w/api.php?action=query&generator=search";

function doSearch(searchTerm, lang = "en", options = {}) {
    const params = Object.assign({}, DEFAULT_SEARCH_PARAMS, options, {
        gsrsearch: searchTerm
    })
    const url = `https://${lang}${SEARCH_API_BASE}`

    return queryApi(url, params).then((response) => {
        return response
    })
}

module.exports = {
    doSearch
}