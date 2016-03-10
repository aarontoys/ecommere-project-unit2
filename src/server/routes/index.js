var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');

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

router.post('/charge', function(req, res,next) {
    var stripeToken = req.body.stripeToken;
    var amount =  req.body.stripeAmount;

    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: amount
    },
    function(err, charge) {
        if (err) {
            res.send('error');
        } else {
            res.send('success');
        }
    });
});
module.exports = router;
