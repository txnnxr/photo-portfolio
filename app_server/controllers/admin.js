var request = require('request');
var apiOptions = {
	server: "http://localhost:3000"
};
if(process.env.NODE_ENV === 'production'){
	apiOptions.server = "https://txnnxr.herokuapp.com";
}

module.exports.uploadPage = function(req, res){
	res.render('upload', {
		title: 'Upload'
	});
}

//route = /api/upload to get here
module.exports.upload = function(req, res){
  var requestOptions, path, postdata, s3url;
  path = "/api/photos"; //this is path to actually perform the POST
  s3url = "https://s3.amazonaws.com/txnnxr-bucket/" + req.body.title;
  postdata = {
    title: req.body.title,
    people: req.body.people,
    url: s3url,
    camera: req.body.camera,
    location: req.body.location,
    tags: req.body.tags //should split in router
  };
  requestOptions = {
    url : apiOptions.server + path,
    method : "POST",
    json : postdata
  };
  if (!postdata.title) {
    res.redirect('/upload');
  } else {
    request(
      requestOptions, //getting stuck processing the request for some reason
      function(err, response, body) { //doesn't make it to the callback function
      	console.log("makes it to the request") 
        if (response.statusCode === 201) {
          res.redirect('/upload'); //this should go to some kind of upload confirmation
        } else if (response.statusCode === 400 && body.name && body.name === "ValidationError" ) {
          res.redirect('/upload');
        } else {
          console.log(body);
          _showError(req, res, response.statusCode);
        }
      }
    );
  }
}