var express = require('express');
var langMid = require('./middleware/lang.js');

var commons = require('./locale/commons.js')
var main = require('./locale/main.js');
var support = require('./locale/support.js');
var contact = require('./locale/contact.js');
var terms = require('./locale/terms.js');
var privacy = require('./locale/privacy.js');

var router = express.Router();

router.use(langMid);

router.get(['/', '/lang/:lang/'], //
  function (req, res, next) {
    res.render('index', main(req, res));
  });

router.get(['/support', '/lang/:lang/support'], //
  function (req, res, next) {
    res.render('support', support(req, res));
  });

router.get(['/contact', '/lang/:lang/contact'], //
  function (req, res, next) {
    res.render('contact', contact(req, res));
  });

router.get(['/terms', '/lang/:lang/terms'], //
  function (req, res, next) {
    res.render('terms', terms(req, res));
  });

router.get(['/privacy', '/lang/:lang/privacy'], //
  function (req, res, next) {
    res.render('privacy', privacy(req, res));
  });

router.get('*', function (req, res) {
  res.render('404', commons(req, res));
});

module.exports = router;