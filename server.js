// modules =================================================
var express        = require('express');var session = require('express-session');
var session = require('express-session');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var config = require('./app/environment');
var compression = require('compression');
var path = require('path');
var passport = require('passport');


// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

if (db.seedDB) { require('./app/seed');}

 
// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(compression());
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(cookieParser());
app.use(passport.initialize());



var server = require('http').createServer(app);

// var socketio = require('socket.io')(server, {
//     // serveClient: config.env !== 'production',
//     path: '/socket.io-client'
//   });
// require('./app/socketio')(socketio);
// routes ==================================================
require('./app/routes')(app); // pass our application into our routes


// start app ===============================================
server.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app