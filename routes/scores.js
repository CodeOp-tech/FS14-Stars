var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// http://localhost:5000/scores 
// feth from /scores



//GET ALL SCORES from /scores
router.get('/', async function(req, res, next){
    try{
      let response = await db("SELECT * FROM scores;");
      res.send(response.data);
    } catch(err) {
      res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
    }  
  });
  


// ADD (POST) NEW SCORE   
router.post('/', async function(req, res, next){
    let { userId, exerciseId, score } = req.body;
    console.log('POST scores:', req.body);
    
    try{
        // First get student ID from user ID
        let results = await db(`SELECT id FROM students WHERE userID = ${userId}`);
        let studentId = results.data[0].id;
        console.log('studentId', studentId);

        // Now insert score
        sql = 
          `INSERT INTO scores (studentID, exerciseID, score)  
          VALUES (${studentId}, ${exerciseId}, ${score});`;
        await db(sql);
        results = await db("SELECT * FROM scores;");
        res.send(results.data);
      } catch(err) {
        res.status(500).send({ error: err.message});
      }  
    });
  


module.exports = router;