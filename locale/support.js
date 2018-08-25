var commons = require('./commons.js');

function getData(lang) {
  if (lang == "es")
    return {};
  else return {};
}

module.exports = function (req, res) {
  var base = commons(req, res);
  return Object.assign(getData(base.lang), base);
}