var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.get('/students', async function(req, res, next){
  try{
    let response = await db("SELECT * FROM prepositions;");
    res.send(response.data);
  } catch(err) {
    res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
  }  
});



module.exports = router;
