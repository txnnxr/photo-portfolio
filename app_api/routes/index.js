var express = require('express');
var router = express.Router();
var ctrlPhotos = require('../controllers/photos');
var ctrlAdmin = require('../../app_server/controllers/admin')

//everthing here is prefixed with '/api' because that's how the route is defined in app.js
//photos
router.get('/photos', ctrlPhotos.photosListByDate);
router.post('/photos', ctrlPhotos.photosCreate);
router.post('/upload', ctrlAdmin.upload);
router.get('/photos/:photoid', ctrlPhotos.photosReadOne);
router.put('/photos/:photoid', ctrlPhotos.photosUpdateOne);
router.delete('/photos/:photoid', ctrlPhotos.photosDeleteOne);

module.exports = router