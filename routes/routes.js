var config = require('../config/config.json');
var path = require('path');
var fs = require('fs');

//console.log('routes module')
module.exports = function(app, router) {
	
	// test route to make sure everything is working (accessed at GET http://localhost:3000/angular-app/api)
	router.route('/').get(function(req, res) {
		res.json({ message: 'Welcome to the Rest Express API!' });
	});

	app.use('/api', router);

};

