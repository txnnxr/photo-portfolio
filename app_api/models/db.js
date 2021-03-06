var mongoose = require('mongoose');

var dbURI = "mongodb://localhost/Photos";
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGODB_URI;
    //seems to be connecting to live DB on Heroku 
    //but testing with production in terminal doesn't connect
}
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
	console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err){
	console.log('Mongoose connection error ' + err);
});

var gracefulShutdown = function(msg, callback){
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

process.once('SIGUSR2', function(){
	gracefulShutdown('nodemon restart', function () {
		process.kill(process.pid, 'SIGUSR2');
	});
});
process.once('SIGINT', function(){
	gracefulShutdown('app termination', function () {
		process.exit(0);
	});
});
process.once('SIGTERM', function(){
	gracefulShutdown('Heroku app termination', function () {
		process.exit(0);
	});
});

require('./photos');