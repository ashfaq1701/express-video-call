var app = require('../app');
var server = require('./server');

var ExpressPeerServer = require('peer').ExpressPeerServer;

var options = {
		debug: true
};

app.use('/peerjs', ExpressPeerServer(server, options));

module.exports = server;


