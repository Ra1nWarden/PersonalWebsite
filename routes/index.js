var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Alan Wang" });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/blog', function(req, res, next) {
  res.redirect('https://wzh19921016.wordpress.com/');
});

router.get('/github', function(req,res, next) {
  res.redirect('https://github.com/Ra1nWarden');
});

module.exports = router;
