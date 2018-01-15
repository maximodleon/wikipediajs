const SEARCH_API_BASE =
  ".wikipedia.org/w/api.php?action=query&generator=search";
const DEFAULT_SEARCH_PARAMS = {
  prop: "info",
  inprop: "url",
  format: "json",
  llprop: "url"
};

const getRequestUrl = (lang = "en") => {
  return `https://${lang}${SEARCH_API_BASE}`;
};

module.exports = {
  getRequestUrl,
  DEFAULT_SEARCH_PARAMS
};
