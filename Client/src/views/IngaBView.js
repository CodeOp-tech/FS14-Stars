import React from "react";
import SignUpFormI from "../components/SignUpFormI";
import UsersList from "../views/UsersList"
import TeachersList from "./TeachersList";


function IngaBView(props){
 function addStudent (newStudent){
 }
 function addTeacher (newTeacher){
 }

 return (
   <div>
    <SignUpFormI 
    submitStudentCb={student => addStudent(student)}
    submitTeacherCb={teacher => addTeacher(teacher)}
    >
    </SignUpFormI>
    
    </div>
  )  
    
}

export default IngaBView;  
