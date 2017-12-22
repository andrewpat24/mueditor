var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let dummyUserObject = [
  {
    id: 1, 
    username: "andrew"
   }, 
   {
     id: 2,
     username: "steve"
   }
  ];
  console.log(dummyUserObject);

  res.json(dummyUserObject);
});

module.exports = router;
