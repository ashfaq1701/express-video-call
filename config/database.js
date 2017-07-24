var app = require('./core');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/express_video_call_db1', function(err) {
	if (err) {
		console.log('Could not connect to mongodb. Ensure that you have mongodb running and mongodb accepts connections on standard ports!');
	}
});

module.exports = app;