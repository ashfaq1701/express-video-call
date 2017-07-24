var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
var ifNotAuthenticated = require('../middlewares/ifNotAuthenticated');
var ifAuthenticated = require('../middlewares/ifAuthenticated');

router.get('/register', ifNotAuthenticated, function(req, res) {
    res.render('register', { });
});

router.post('/register', ifNotAuthenticated, function(req, res, next) {
    User.register(new User({ email : req.body.email }), req.body.password, function(err, user) {
        if (err) {
          return res.render('register', { error : err.message });
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});

router.get('/login', ifNotAuthenticated, function(req, res) {
    res.render('login', { user : req.user, flash: req.flash() });
});

router.post('/login', ifNotAuthenticated, passport.authenticate('local', { 
		failureRedirect: '/auth/login', 
		failureFlash: true 
	}), 
	function (req, res, next) {
		req.session.save(function(err) {
			if (err) {
				return next(err);
			}
			res.redirect('/');
		});
	}
);

router.get('/logout', ifAuthenticated, function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;