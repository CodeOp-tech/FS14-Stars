import React, {useState, useEffect} from 'react'
// import { View, Text } from 'react-native'
import ExerciseItems from '../components/ExerciseItems.js';



function RebeccaGView () {

const [exercise, setExercise] = useState(null);


    return (
        <div>
            <ExerciseItems/>
        </div>
    )
}

export default RebeccaGView;
