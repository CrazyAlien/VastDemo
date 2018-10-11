var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Vast Demo', message : 'This is just a simple vast Demo'});
});

module.exports = router;
