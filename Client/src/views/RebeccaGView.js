import React, {useState, useEffect} from 'react'
// import { View, Text } from 'react-native'
import AddExercise from '../components/AddExercise.js';


//return <AddExercise/>
function RebeccaGView () {

const [exercise, setExercise] = useState({});
let [input, setInput] = useState({});
// //need to have a new one that lets it add more exercises 



const handleAddExercise = (newEx) => { 
setExercise((prevEx) => [...prevEx, newEx]); 
//console.log(newEx);
};

//create an add exercise function 
//submitCb={(exercise) => addExercise(exercise)}
// addExercise={(newEx) => handleAddExercise(newEx)}

    return (
        <div> 
            <AddExercise addExercise={(newEx) => handleAddExercise(newEx)}/>
        </div>
    )
}

export default RebeccaGView;

//i can get rid of exerciseitems and replace with teachersexercises when im ready to test it 



