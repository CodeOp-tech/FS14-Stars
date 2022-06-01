import React from 'react'
import { useEffect, useState } from "react";


function TeachersList() {
   let [teachers, setTeachers] = useState([]);
    
    useEffect(() => {
      getTeachers("teachers");
     }, []);
     
    const getTeachers = () => {
        fetch('/teachers')
          .then(response => response.json())
          .then(teachers => {
            console.log(teachers);
            setTeachers(teachers);
          })
          .catch(error => {
            console.log(error);
          });
        }
    return (
        <div>
                {
                teachers.map((teachers) => (
                    <li key={teachers.id}>
                       {teachers.username} 
                       {teachers.qualifications}, 
                       {teachers.experience}
                    </li>
                ))
                }
        </div>
    )
}


export default TeachersList;