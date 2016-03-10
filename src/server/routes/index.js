var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);




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

router.get('/charge', function (req, res, next) {
  res.render('charge');
})

router.post('/charge', function(req, res,next) {
    console.log(req.body);
    var stripeToken = req.body.stripeToken;
    var amount =  req.body.stripeAmount;

    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: 10000
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
