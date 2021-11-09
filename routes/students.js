var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// http://localhost:5000/students
// fetch from /students

//GET ALL students from /students
router.get('/', async function(req, res, next){
    try{
      let response = await db("SELECT * FROM students;");
      res.send(response.data);
    } catch(err) {
      res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
    }  
  });

//POST to /students  
router.post('/', async function(req,res,next){
    let { startLevel, currentLevel, userID } = req.body;
  
    try{
      let sql = 
        `INSERT INTO students (startLevel, currentLevel, userID)  
        VALUES ("${startLevel}", "${currentLevel}", ${userID});`;
      await db(sql);
      let results = await db("SELECT * FROM students;");
      res.send(results.data);
    } catch(err) {
      res.status(500).send({ error: err.message});
    }  
  });


module.exports = router;