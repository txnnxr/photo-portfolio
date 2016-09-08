var express = require('express');
var router = express.Router();
var ctrlPhotos = require('../controllers/photos');

//locations
router.get('/photos', ctrlPhotos.photosListByDate);
router.post('/photos', ctrlPhotos.photosCreate);
router.get('/photos/:photoid', ctrlPhotos.photosReadOne);
router.put('/photos/:photoid', ctrlPhotos.photosUpdateOne);
router.delete('/photos/:photoid', ctrlPhotos.photosDeleteOne);

module.exports = router