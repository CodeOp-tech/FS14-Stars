var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ message: 'Try adding any of the following to get your data: /exercises, /items, /scores, /students, /teachers /users' });
});

module.exports = router;
