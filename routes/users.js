var express = require('express');
var router = express.Router();
const { ensureSameUser } = require('../middleware/guards');
const db = require("../model/helper");

// http://localhost:5000/users 
// fetch from /users

// in case people want to see all users in the website
// email and password will not be seen

router.get('/', async function(req, res, next){
  try {
    let results = await db("SELECT * FROM users;");
    let users = results.data;
    users.forEach(u => {delete u.password && delete u.email});  // don't return the passwords and emails
    res.send(users);
  } catch (err) {
    next(err);
  }  
});

router.get('/:userId', ensureSameUser, async function(req, res, next) {
  let { userId } = req.params;
  let sql = 'SELECT * FROM users WHERE id = ' + userId;
  
  try {
      let results = await db(sql);
      let user = results.data[0];
      delete user.password;  // don't return the password
      res.send(user);
  } catch (err) {
      next(err);
  }
});


module.exports = router;
