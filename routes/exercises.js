var express = require('express');
var router = express.Router();
const db = require("../model/helper");



router.get('/', async function(req, res, next){
    try{
      let response = await db("SELECT * FROM items ORDER BY seq;");
      res.send(response.data);
    } catch(err) {
      res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
    }  
  });
  
  router.post('/', async function(req,res,next){
    let { seq, sentence, options, answer, explanation } = req.body;
  
    try{
      let sql = 
        `INSERT INTO prepositions (seq, sentence, options, answer, explanation)  
        VALUES ("${seq}", "${sentence}", "${options}", "${answer}", "${explanation}");`;
      await db(sql);
      let results = await db("SELECT * FROM items ORDER BY seq;");
      res.send(results.data);
    } catch(err) {
      res.status(500).send({ error: err.message});
    }  
  });
  
  
  module.exports = router;
  