var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// http://localhost:5000/users 
// feth from /users

router.get('/', async function(req, res, next){
  try{
    let response = await db("SELECT * FROM users;");
    res.send(response.data);
  } catch(err) {
    res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
  }  
});

// adds username, password, email, type in the table
// password unhashed

router.post('/', async function(req,res,next){
  let { username, password, email, type } = req.body;

  try{
    let sql = 
      `INSERT INTO users (username, password, email, type)  
      VALUES ("${username}", "${password}", "${email}", "${type}");`;
    await db(sql);
    let results = await db("SELECT * FROM users;");
    res.send(results.data);
  } catch(err) {
    res.status(500).send({ error: err.message});
  }  
});


module.exports = router;
