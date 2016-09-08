var mongoose = require('mongoose');
var Photo = mongoose.model('Photo');

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

module.exports.photosCreate = function(req, res){
	console.log(req.body);
	Photo.create({
		title: req.body.title,
		url: req.body.url,
		location: req.body.location,
		people: req.body.people.split(","), //create array by splitting on commas
		camera: req.body.camera,
		tags: req.body.tags.split(",")
		//no date cause it should always default to now
	}, function(err, photo){
		if(err){
			sendJsonResponse(res, 400, err);
		}else{
			sendJsonResponse(res, 201, photo);
		}
	});
}
module.exports.photosListByDate = function(req, res){
	Photo
		.find().sort('-dateUploaded')
		.limit(2) //up this to 12 when uploaded enough data 
		.exec(function(err, photo) {
			if(!photo){
				sendJsonResponse(res, 404, {
					"message": "recent photos not found"
				});
				return
			}else if(err){
				sendJsonResponse(res, 404, err);
				return
			}else{
				sendJsonResponse(res, 200, photo);
			}
		});
}
module.exports.photosReadOne = function(req, res){
	if(req.params && req.params.photoid){
		Photo
			.findById(req.params.photoid)
			.exec(function(err, photo){
				if(!photo){
					sendJsonResponse(res, 404, {
						"message": "photoid not found"
					});
					return
				}else if(err){
					sendJsonResponse(res, 404, err);
					return
				}
					sendJsonResponse(res, 200, photo);
			});
	}else{
		sendJsonResponse(res, 404, {
			"message" : "No locationid in request"
		})	
	}
}
module.exports.photosUpdateOne = function(req, res){
  if (!req.params.photoid) {
    sendJsonResponse(res, 404, {
      "message": "Not found, photonid is required"
    });
    return;
  }
  Photo
    .findById(req.params.photoid)
    .exec(
      function(err, photo) {
        if (!photo) {
          sendJsonResponse(res, 404, {
            "message": "photoid not found"
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 400, err);
          return;
        }
		photo.title = req.body.title,
		photo.url = req.body.url,
		photo.location = req.body.location,
		photo.people = req.body.people.split(","), //create array by splitting on commas
		photo.camera = req.body.camera,
		photo.tags = req.body.tags.split(",")
        photo.save(function(err, photo) {
          if (err) {
            sendJsonResponse(res, 404, err);
          } else {
            sendJsonResponse(res, 200, photo);
          }
        });
      }
  );
}
module.exports.photosDeleteOne = function(req, res){
	var photoid = req.params.photoid;
	if(photoid){
		Photo
			.findByIdAndRemove(photoid)
			.exec(function(err, photo){
				if(err){
					sendJsonResponse(res, 404, err);
					return;
				}
				sendJsonResponse(res, 204, null);
			});
	}else{
		sendJsonResponse(res, 404, {
			"message": "No photoid"
		});
	}}