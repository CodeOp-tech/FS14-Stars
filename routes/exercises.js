var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/**
 * Guards
 **/


 async function ensureExerciseExists(req, res, next) {
  try {
      let results = await db(`SELECT * FROM exercises WHERE id = ${req.params.id}`);
      if (results.data.length === 1) {
          // Exercise was found; let next middleware function run
          next();
      } else {
          res.status(404).send({ error: 'Exercise not found' });
      }
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
}

/**
 * Helpers
 **/


 async function sendAllExercises(res) {
  // We don't need try/catch here because we're always called from inside one
  let results = await db('SELECT * FROM exercises ORDER BY category');
  res.send(results.data);
}

// Convert the DB results into a useful (nested) JSON format, exercise with list of items
function joinToJson(results) {
  // Get first row
  let row0 = results.data[0];

  // Create array of exercise items objects
  let items = [];
  if (row0.itemId) {
      items = results.data.map(i => ({
          id: i.itemId,
          sentence: i.sentence,
          options: i.options,
          answer: i.answer,
          explanation: i.explanation,
          exerciseID: i.exerciseID
      }));
  }

  // Create exercise object
  let exercise = {
      id: row0.exerciseId,
      title: row0.title,
      category: row0.category,
      items
  };

  return exercise;
}


/**
 * Routes
 **/


// GET all exercises.
router.get('/', async function(req, res) {
  try {
      sendAllExercises(res);
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

// GET exercise by ID
router.get('/:id', ensureExerciseExists, async function(req, res) {
  try {
      // Get exercise; we know it exists, thanks to guard
      // Use LEFT JOIN to also return items
      let sql = `
          SELECT e.*, i.*, e.id AS exerciseId, i.id AS itemId
          FROM items AS i
          LEFT JOIN exercises AS e ON exerciseId = e.id
          WHERE e.id = ${req.params.id}
      `;

      let results = await db(sql);
      // Convert DB results into "sensible" JSON
      let exercise = joinToJson(results);

      res.send(exercise);
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

// POST a new exercise
router.post('/', async function(req, res) {
  let { category, title } = req.body;
  let sql = `
      INSERT INTO exercises (category, title)
      VALUES ('${ category }', '${ title }')
  `;

  try {
      // Insert the new exercise
      await db(sql);
      // Set status code for "resource created" and return all exercises      
      res.status(201);
      sendAllExercises(res);
  } catch (err) {
      res.status(500).send({ error: err.message });  
  }
});

// ADD (POST) NEW ITEMS TO EXISTING EXERCISE

  
  // router.post('/', async function(req,res,next){
  //   let { seq, sentence, options, answer, explanation } = req.body;
  
  //   try{
  //     let sql = 
  //       `INSERT INTO prepositions (seq, sentence, options, answer, explanation)  
  //       VALUES ("${seq}", "${sentence}", "${options}", "${answer}", "${explanation}");`;
  //     await db(sql);
  //     let results = await db("SELECT * FROM items ORDER BY seq;");
  //     res.send(results.data);
  //   } catch(err) {
  //     res.status(500).send({ error: err.message});
  //   }  
  // });
  
  
  module.exports = router;
  