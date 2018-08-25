var express = require('express');
var router = express.Router();
var SUPPORT_LANGS = ["es", "en"];

router.get('/lang/:lang*', function (req, res, next) {
  if (!SUPPORT_LANGS.includes(req.params.lang))
    res.redirect("/"); //If not supported
  else next();
});

router.get('*', function (req, res, next) {
  if (!req.headers["accept-language"] || //If not supported
    !SUPPORT_LANGS.includes(req.headers["accept-language"]))
    req.headers["accept-language"] = "en";

  var lang = req.headers["accept-language"].substring(0, 2);
  if (lang != "en")
    res.redirect("lang/" + lang + "" + req.path);
  else next();
});

module.exports = router;