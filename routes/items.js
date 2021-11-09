var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// http://localhost:5000/items 
// feth from /items

//GET ALL ITEMS from /items
router.get('/', async function(req, res, next){
    try{
      let response = await db("SELECT * FROM items ORDER BY seq;");
      res.send(response.data);
    } catch(err) {
      res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
    }  
  });
  


// ADD (POST) NEW ITEMS TO EXISTING EXERCISE, linked by foreign key, exerciseID  
router.post('/', async function(req,res,next){
    let { seq, sentence, options, answer, explanation, exerciseID } = req.body;
    
    try{
        let sql = 
          `INSERT INTO items (seq, sentence, options, answer, explanation, exerciseID)  
          VALUES (${seq}, "${sentence}", "${options}", "${answer}", "${explanation}", ${exerciseID});`;
        await db(sql);
        let results = await db("SELECT * FROM items ORDER BY seq;");
        res.send(results.data);
      } catch(err) {
        res.status(500).send({ error: err.message});
      }  
    });
  


module.exports = router;