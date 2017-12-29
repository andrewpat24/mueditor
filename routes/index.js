var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.json([{
    id: 1, 
    username: "andrew"
   }, 
   {
     id: 2,
     username: "steve"
   }]);
});

router.get('/options', function(req, res, next) {
  res.render('index');
});

router.get('/send', function(req, res, next) {

});

router.get('/options', function(req, res, next) {

});

module.exports = router;
