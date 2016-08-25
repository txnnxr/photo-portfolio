var express = require('express');
var router = express.Router();
var ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', ctrlOthers.about);

module.exports = router;
