var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.get('/exercise', async function(req, res, next){
  try{
    let response = await db("SELECT * FROM prepositions ORDER BY seq;");
    res.send(response.data);
  } catch(err) {
    res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
  }  
});

router.post('/exercise', async function(req,res,next){
  let { seq, sentence, options, answer, explanation } = req.body;

  try{
    let sql = 
      `INSERT INTO prepositions (seq, sentence, options, answer, explanation)  
      VALUES ("${seq}", "${sentence}", "${options}", "${answer}", "${explanation}");`;
    await db(sql);
    let results = await db("SELECT * FROM prepositions ORDER BY seq;");
    res.send(results.data);
  } catch(err) {
    res.status(500).send({ error: err.message});
  }  
});


module.exports = router;
