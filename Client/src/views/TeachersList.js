import React from 'react';
import { useState } from 'react';
// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";


// function TeachersList() {
//    let [teachers, setTeachers] = useState([]);
//     const history = useHistory();
//     useEffect(() => {
//       getTeachers("teachers");
//      }, []);
     
//     const getTeachers = () => {
//         fetch('/teachers')
//           .then(response => response.json())
//           .then(teachers => {
//             console.log(teachers);
//             setTeachers(teachers);
//           })
//           .catch(error => {
//             console.log(error);
//           });
//         }
//     return (
//         <div>
//                 {
//                 teachers.map((teachers) => (
//                     <ul key={teachers.id}>
//                        {teachers.username, teachers.type}
//                     </ul>
//                 ))
//                 }
//         </div>
//     )
// }
function TeachersList(props) {
  let [teachers, setTeachers] = useState([]);
  return <div className="TeachersList">
    <ul>
    {
      props.teachers.map(teacher => (
        <li key={teacher.id}>
          {teacher.username}, {teacher.qualifications}, {teacher.experience} 
          
          {/* <span 
            onClick={e => props.profileCb(teacher.id)}
            style={{ cursor: 'pointer '}}>
          
          </span> */}
          {' '}
        </li>
      ))
    }
    </ul>
  </div>;
}

export default TeachersList;