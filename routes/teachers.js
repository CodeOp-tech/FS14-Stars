var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const bcrypt = require('bcrypt');
const { BCRYPT_WORK_FACTOR } = require('../config');
const { ensureSameUser } = require('../middleware/guards');

// const jwt = require("jsonwebtoken"); // secret key for log in purposes... 
// where to put log in? leave it here? or create a login page?


// http://localhost:5000/teachers 
// fetch from /teachers
// GET all teachers
// GET one teacher with teacher information (teachers/id)
// POST new teacher, (register new teacher)



/**
 * Guards
 **/


 async function ensureTeacherExists(req, res, next) {
  try {
      let results = await db(`SELECT * FROM teachers WHERE id = ${req.params.id}`);
      if (results.data.length === 1) {
          // Teacher was found; let next middleware function run
          next();
      } else {
          res.status(404).send({ error: 'Teacher not found' });
      }
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
}

/**
 * Helpers
 **/

 async function sendAllTeachers(res) {
  // We don't need try/catch here because we're always called from inside one
  let results = await db('SELECT * FROM teachers');
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
  }

  // Create teacher objects
  let teacher = {
      id: row0.teacherId,
      qualifications: row0.qualifications,
      experience: row0.experience,
      userID: row0.userID,
      user
  };

  return teacher;
}


//GET ALL teachers from /teachers
router.get('/', async function(req, res, next){
    try{
      let response = await db("SELECT * FROM teachers;");
      res.send(response.data);
    } catch(err) {
      res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
    }  
  });

// GET teacher by ID
router.get('/:userId', ensureSameUser, async function(req, res) {
  try {
      // Get teacher; we know it exists, thanks to guard
      // Use LEFT JOIN to also return user details
      let sql = `
          SELECT t.*, u.*, t.id AS teacherId, u.id AS userId
          FROM teachers AS t
          LEFT JOIN users AS u ON t.userID = u.id
          WHERE t.userID = ${req.params.userId}
      `;

      let results = await db(sql);
      // Convert DB results into "sensible" JSON
      let teacher = joinToJson(results);

      res.send(teacher);
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

// POST A TEACHER (REGISTER A NEW TEACHER)
router.post('/', async function(req, res) {
  let { username, password, email, type, qualifications, experience } = req.body;
  let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

  let sql = `
      INSERT INTO users (username, password, email, type)
      VALUES ('${username}', '${hashedPassword}', '${email}', '${type}');
      SELECT LAST_INSERT_ID();
  `;

  try {    
      // Insert the teacher
      let results = await db(sql);
      
      // The results contain the new Foreign Key userID thanks to SELECT LAST_INSERT_ID()
      let newUserID = results.data[0].insertId;

      let sql2 = `
          INSERT INTO teachers (qualifications, experience, userID)
          VALUES ('${qualifications}', ${experience}, ${newUserID});
        `;
          await db(sql2);

      // Set status code for "teacher created" and return all teachers
      res.status(201);
      sendAllTeachers(res);
  } catch (err) {
      res.status(500).send({ error: err.message });  
  }
});



module.exports = router;