var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res, next) {
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

router.get('/login', function(req, res) {
    res.render('login', { user : req.user, flash: req.flash() });
});

router.post('/login', passport.authenticate('local', { 
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

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;