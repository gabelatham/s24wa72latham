var express = require('express');
var router = express.Router();

/* GET mydata page */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Gabe Latham' });
});

module.exports = router;
