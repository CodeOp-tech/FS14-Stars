import React from "react";
import StudentScores from './StudentScores';

function StudentProfile(props) {
  let student = props.student;

  return (
    <div className="StudentProfile">
      <h2>{student.userName}</h2>
      <p>{student.currentLevel}</p>
      <StudentScores />
    </div>
  );
}

export default StudentProfile;
