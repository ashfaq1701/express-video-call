var app = require('./core');

var index = require('../routes/index');
var auth = require('../routes/auth');
var users = require('../routes/users');


app.use('/', index);
app.use('/auth', auth);
app.use('/users', users);

module.exports = app;