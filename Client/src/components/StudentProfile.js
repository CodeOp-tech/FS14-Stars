import React from "react";

function StudentProfile(props) {
  let student = props.student;

  return (
    <div className="StudentProfile">
      <h2>{student.userName}</h2>
      <p>{student.currentLevel}</p>
    </div>
  );
}

export default StudentProfile;
