var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
	email: String,
	password: String
});

User.plugin(passportLocalMongoose, {
	usernameField: 'email',
	passwordField: 'password'
});

module.exports = mongoose.model('User', User);