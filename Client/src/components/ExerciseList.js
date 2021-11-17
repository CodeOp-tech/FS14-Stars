import React from 'react'
import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

function ExerciseList(props) {
   let [exercises, setExercises] = useState([]);
    const history = useHistory();
  
    useEffect(() => {
      getExercises("exercises");
     }, []);

    const getExercises = () => {
        fetch('/exercises')
          .then(response => response.json())
          .then(exercises => {
            console.log(exercises);
            setExercises(exercises);
          })
          .catch(error => {
            console.log(error);
          });
        }

    return (
        <div>
               {
                exercises.map((exercises) => (
                    <ul key={exercises.id}>
                        {/* <Link to={'/exercises/'}></Link> */}
                        {exercises.title}
                    </ul>
                ))
                }
        </div>
    )
}

export default ExerciseList;



