var config = require('./config/config.json');
var http = require('http');
var express = require('express');
var app = module.exports = express();
var router = module.exports = express.Router();
var portHttp = process.env.PORT || config.webhostPortHttp;

var routes = require('./routes/routes.js')(app, router);

http.createServer(app).listen(portHttp, function() {
	console.log('Server listening on port ' + portHttp);
});


/*
router.route('/').get(function(req, res) {
	res.json({ message: 'Welcome to the Rest Express API!' });
});

app.use('/api', router);
*/

app.get('/', function (req, res) {
	res.header('Content-type', 'text/html');
	return res.end('<h1>Hello, Secure World!</h1>');
});
