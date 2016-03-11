var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');

var session = require('express-session');
var flash = require('connect-flash');


var passport = require('../lib/auth');
var helpers = require('../lib/helpers');
var stripe = require('stripe');

router.get('/', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('index', {user: req.user});
});

router.get('/login', helpers.loginRedirect, function(req, res, next) {
  res.render('login', {message: req.flash('message')});
});

router.post('/login', function(req, res, next) {
  console.log('test')
  passport.authenticate('local', function(err, user) {
    if (err) {
      console.log('error1');
      return next(err);
    } else {
      req.logIn(user, function(err) {
        if (err) {
          console.log('error2');
          return next(err);
        } else {
          console.log('error3');
          return res.redirect('/');
        }
      });
    }
  })(req, res, next);
});

router.get('/register', helpers.loginRedirect, function(req, res, next) {
  res.render('register', {message: req.flash('message')});
});

router.post('/register', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  // check if email is unique
  knex('users').where('email', email)
    .then(function(data){
      console.log(data);
      // if email is in the database send an error
      if(data.length) {
          req.flash('message', {
            status: 'danger',
            message: 'Email already exists.!'
          });
          return res.redirect('/register');
      } else {
        // hash and salt the password
        var hashedPassword = helpers.hashing(password);
        // if email is not in the database insert it
        knex('users').insert({
          email: email,
          password: hashedPassword
        })
        .then(function(data) {
          req.flash('message', {
            status: 'success',
            message: 'Welcome!'
          });
          return res.redirect('/login');
        })
        .catch(function(err) {
          return res.send('crap');
        });
      }
    })
    .catch(function(err){
      console.log(err);
      return next(err);
    });
});

router.get('/logout', helpers.ensureAuthenticated, function(req, res, next) {
  req.logout();
  res.redirect('/');
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
