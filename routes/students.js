var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// http://localhost:5000/students
// fetch from /students

/**
 * Guards
 **/


 async function ensureStudentExists(req, res, next) {
  try {
      let results = await db(`SELECT * FROM students WHERE id = ${req.params.id}`);
      if (results.data.length === 1) {
          // Student was found; let next middleware function run
          next();
      } else {
          res.status(404).send({ error: 'Student not found' });
      }
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
}

/**
 * Helpers
 **/

 async function sendAllStudents(res) {
  // We don't need try/catch here because we're always called from inside one
  let results = await db('SELECT * FROM students');
  res.send(results.data);
}


// Convert the DB results into a useful (nested) JSON format, exercise with list of items
function joinToJson(results) {
  // Get first row
  let row0 = results.data[0];

  // Create array of user objects
  let user = [];
  if (row0.userId) {
      user = results.data.map(u => ({
          id: u.userId,
          username: u.username,
          password: u.password,
          email: u.email,
          type: u.type
      }));
  }

  // Create teacher objects
  let student = {
      id: row0.studentId,
      startLevel: row0.startLevel,
      currentLevel: row0.currentLevel,
      userID: row0.userID,
      user
  };

  return student;
}


//GET ALL students from /students
router.get('/', async function(req, res, next){
    try{
      let response = await db("SELECT * FROM students;");
      res.send(response.data);
    } catch(err) {
      res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
    }  
  });


// GET student by ID
router.get('/:id', ensureStudentExists, async function(req, res) {
  try {
      // Get student; we know it exists, thanks to guard
      // Use LEFT JOIN to also return user details
      let sql = `
          SELECT s.*, u.*, s.id AS studentId, u.id AS userId
          FROM students AS s
          LEFT JOIN users AS u ON s.userID = u.id
          WHERE s.id = ${req.params.id}
      `;

      let results = await db(sql);
      // Convert DB results into "sensible" JSON
      let student = joinToJson(results);

      res.send(student);
  } catch (err) {
      res.status(500).send({ error: err.message });
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