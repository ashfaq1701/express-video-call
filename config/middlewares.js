var app = require('./core');
var ifAuthenticated = require('../middlewares/ifAuthenticated');
var ifNotAuthenticated = require('../middlewares/ifNotAuthenticated');

module.exports = app;