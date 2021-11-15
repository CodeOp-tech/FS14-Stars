var express = require('express');
var router = express.Router();
const db = require("../model/helper");


// http://localhost:5000/exercises 
// fetch from /exercises

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
          seq: i.seq,
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
      level: row0.level,
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
          FROM exercises AS e
          LEFT JOIN items AS i ON i.exerciseID = e.id
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
  let { category, title, level } = req.body;
  let sql = `
      INSERT INTO exercises (category, title, level)
      VALUES ('${ category }', '${ title }', '${level}' )
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



  module.exports = router;
  