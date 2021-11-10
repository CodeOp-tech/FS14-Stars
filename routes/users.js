var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// http://localhost:5000/users 
// fetch from /users

router.get('/', async function(req, res, next){
  try{
    let response = await db("SELECT * FROM users;");
    res.send(response.data);
  } catch(err) {
    res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
  }  
});



module.exports = router;
