import React from "react";

function TeacherProfile(props) {
  let teacher = props.teacher;

  return (
    <div className="TeacherProfile">
      <h2>{teacher.userName}</h2>
      <p>{teacher.qualifications}, {teacher.experience} years of experience</p>
    </div>
  );
}

export default TeacherProfile;
