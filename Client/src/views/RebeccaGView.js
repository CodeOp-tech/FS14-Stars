import React, {useState, useEffect} from 'react'
import ExerciseItems from '../components/ExerciseItems.js';
// import { View, Text } from 'react-native'




function RebeccaGView () {

const [exercise, setExercise] = useState(null);


    return (
        <div>
            <ExerciseItems/>
        </div>
    )
}

export default RebeccaGView;
