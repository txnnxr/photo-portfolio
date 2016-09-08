var mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
	title: { type: String, required: true},
	url: String,
	location: String,
	people: [String],
	Camera: String,
	dateUploaded: { type: Date, "default": Date.now}
});

mongoose.model('Photo', photoSchema);