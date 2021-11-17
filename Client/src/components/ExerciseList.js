import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Api from '../helpers/Api';


function ExerciseList(props) {
    let [exercises, setExercises] = useState([]);
  
    useEffect(() => {
        getExercises();
    }, []);

    async function getExercises() {
        let response = await Api.getExercises();
        if (response.ok) {
            setExercises(response.data);
        } else {
            console.log('ExerciseList getExercises:', response.error);
        }
    }

    return (
        <div className="ExerciseList mt-5">
            <table className="table table-sm text-start">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                {
                    exercises.length && exercises.map(e => (
                        <tr key={e.id}>
                            <td><Link to={'/rebeccagview/'+e.id}>{e.title}</Link></td>
                            <td>{e.category}</td>
                            <td>{e.level}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ExerciseList;