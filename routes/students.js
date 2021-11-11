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

  // Create user object
  let user = {
    id: row0.userId,
    username: row0.username,
    password: row0.password,
    email: row0.email,
    type: row0.type
  };

  // Create an array of exercises
  let exercises = [];
  if(row0.exerciseId){
    exercises = results.data.map(row => ({
    id: row.exerciseId,
    category: row.category,
    title: row.title,
    level: row.level
        }));
  }
 
  

  // Create array of scores
  let scores = [];
  if (row0.scoreId) {
      scores = results.data.map(row => ({
      id: row.scoreId,
      date_time: row.date_time,
      exerciseID: row.exerciseID,  
      studentID: row.studentID,
      score: row.score,
        }));
    }
  
  // Create student object
  let student = {
      id: row0.studentId,
      startLevel: row0.startLevel,
      currentLevel: row0.currentLevel,
      userID: row0.userID,
      user,
      exercises,
      scores
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
      // Use LEFT JOIN to also return student scores
      let sql = `
          SELECT students.*, u.*, scores.*, e.*, students.id AS studentId, u.id AS userId, scores.id AS scoreId, e.id as exerciseId
          FROM students AS students
          LEFT JOIN users AS u ON students.userID = u.id
          LEFT JOIN scores AS scores ON students.Id = scores.studentID
          LEFT JOIN exercises AS e ON scores.exerciseID = e.id 
          WHERE students.id = ${req.params.id}
      `;

      let results = await db(sql);
      // Convert DB results into "sensible" JSON
      let student = joinToJson(results);

      res.send(student);
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

// POST a new student
router.post('/', async function(req, res) {
  let { username, password, email, type, startLevel, currentLevel } = req.body;

  let sql = `
      INSERT INTO users (username, password, email, type)
      VALUES ('${username}', '${password}', '${email}', '${type}');
      SELECT LAST_INSERT_ID();
  `;

  try {    
      // Insert the student
      let results = await db(sql);
      
      // The results contain the new Foreign Key userID thanks to SELECT LAST_INSERT_ID()
      let newUserID = results.data[0].insertId;

      let sql2 = `
          INSERT INTO students (startLevel, currentLevel, userID)
          VALUES ('${startLevel}', '${currentLevel}', ${newUserID});
          SELECT LAST_INSERT_ID();
        `;
          await db(sql2);

      // Set status code for "student created" and return all students
      res.status(201);
      sendAllStudents(res);
  } catch (err) {
      res.status(500).send({ error: err.message });  
  }
});



module.exports = router;