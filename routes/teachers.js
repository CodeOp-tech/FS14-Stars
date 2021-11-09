var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// http://localhost:5000/teachers 
// fetch from /teachers

//GET ALL teachers from /teachers
router.get('/', async function(req, res, next){
    try{
      let response = await db("SELECT * FROM teachers;");
      res.send(response.data);
    } catch(err) {
      res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
    }  
  });

//POST to /teachers  
router.post('/', async function(req,res,next){
    let { qualifications, experience, userID } = req.body;
  
    try{
      let sql = 
        `INSERT INTO teachers (qualifications, experience, userID)  
        VALUES ("${qualifications}", ${experience}, ${userID});`;
      await db(sql);
      let results = await db("SELECT * FROM teachers;");
      res.send(results.data);
    } catch(err) {
      res.status(500).send({ error: err.message});
    }  
  });

module.exports = router;