var express = require('express');
var router = express.Router();
const { ensureSameUser } = require('../middleware/guards');
const db = require("../model/helper");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require('../config');


// http://localhost:5000/users 
// GET /users = all users
// GET /user1 = with password, view details of 1 user
// POST /users = login

// All users can be seen (username only) 
// Email and password are hidden.

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

/**
 * Log in a user
 **/

 router.post('/', async (req, res, next) => {
  let { username, password } = req.body;

  try {
      let results = await db(`SELECT * FROM users WHERE username = '${username}'`);
      if (results.data.length === 0) {
          // Username not found
          res.status(401).send({ error: 'Login failed' });
      } else {
          let user = results.data[0];  // the user's row/record from the DB
          let passwordsEqual = await bcrypt.compare(password, user.password);
          if (passwordsEqual) {
              // Passwords match
              let payload = { userId: user.id };
              // Create token containing user ID
              let token = jwt.sign(payload, SECRET_KEY);
              // Also return user (without password)
              delete user.password;
              res.send({
                  message: `Welcome, ${username}`,
                  token: token,
                  user: user
              });
          } else {
              // Passwords don't match
              res.status(401).send({ error: 'Login failed' });
          }
      }
  } catch (err) {
      next(err);
  }
});



module.exports = router;
