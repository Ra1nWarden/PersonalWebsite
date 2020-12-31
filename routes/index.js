var express = require('express');
var path = require('path');
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

router.get('/calculator', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'calculator.html'));
});

module.exports = router;
