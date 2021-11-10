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
router.post('/', async function(req,res,next){
    let { studentID, exerciseID, score } = req.body;
    
    try{
        let sql = 
          `INSERT INTO scores (studentID, exerciseID, score)  
          VALUES (${studentID}, ${exerciseID}, ${score});`;
        await db(sql);
        let results = await db("SELECT * FROM scores;");
        res.send(results.data);
      } catch(err) {
        res.status(500).send({ error: err.message});
      }  
    });
  


module.exports = router;