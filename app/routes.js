module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.use('/api/braintree', require('./api/braintree'));
	app.use('/api/orders', require('./api/order'));
	app.use('/api/products', require('./api/product'));
    app.use('/api/catalogs', require('./api/catalog'));
	app.use('/api/orders', require('./api/order'));

	app.use('/api/users', require('./api/user'));
	app.use('/auth', require('./auth'));


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};