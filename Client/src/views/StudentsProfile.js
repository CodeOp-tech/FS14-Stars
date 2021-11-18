import React from 'react'
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import StudentScores from '../components/StudentScores';


function StudentsProfile() {
   let [users, setUsers] = useState([]);
    const history = useHistory();
    useEffect(() => {
      getUsers("users");
     }, []);
    const getUsers = () => {
        fetch("/students")
          .then(response => response.json())
          .then(users => {
            console.log(users);
            setUsers(users);
          })
          .catch(error => {
            console.log(error);
          });
        }
    return (
        <div>
                {
                users.map((users) => (
                    <ul key={users.id}>
                       {users.username}{users.type}
                    </ul>
                ))
                }
                <StudentScores />
        </div>
    )
}
export default StudentsProfile;