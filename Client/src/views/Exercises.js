import React from 'react'
import StudentScores from '../components/StudentScores';
import ExerciseList from '../components/ExerciseList';
import StudentProfile from '../components/StudentProfile';


function Exercises () {
    return (
        <div>
            <StudentScores />

            <StudentProfile />

            <ExerciseList />
        </div>
    )
}

export default Exercises;
