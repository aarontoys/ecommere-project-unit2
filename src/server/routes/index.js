var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/product', function(req, res, next) {
  console.log('yo');
  res.render('product', {});
});


router.get('/checkout', function(req, res, next) {
  res.render('checkout', {});
});

router.get('/invoice', function(req, res, next) {
  res.render('invoice', {});
});
module.exports = router;
