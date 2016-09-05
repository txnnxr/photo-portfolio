var express = require('express');
var router = express.Router();
var ctrlOthers = require('../controllers/others');
var ctrlSearch = require('../controllers/search');
var ctrlAdmin = require('../controllers/admin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', ctrlOthers.about);
router.get('/search', ctrlSearch.search);
router.get('/upload', ctrlAdmin.upload);

module.exports = router;
