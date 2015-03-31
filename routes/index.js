var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Alan Wang" });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/algorithm', function(req, res, next) {
  res.render('algorithm');
});

router.get('/hobbies', function(req, res, next) {
  res.render('hobbies');
});

router.get('/messages', function(req, res, next) {
  res.render('messages');
});

module.exports = router;
