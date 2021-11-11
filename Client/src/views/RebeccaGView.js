import React, {useState, useEffect} from 'react'
// import { View, Text } from 'react-native'
import Form from '../components/Form.js';

//http://localhost:5000/exercises/3 - this is how to fetch the exercise objects 

function RebeccaGView () {

const [exercise, setExercise] = useState(null);
//so this is getting the whole exercises object the upper level, then filtering out all the 
//ones that are not exercise 3. 
//so we have the title, category, level and items being stored in useState
//now how to get the ones i want 

const getExercise = () => {
//console.log("hello");
//fetch("/items") 
fetch("/exercises/3") 
    .then(res => res.json())
    .then(json => {
         console.log(json);
       setExercise(json);
       //console.log(json);
       
    })
    .catch((err) => console.log(err));
}

useEffect(() => {
getExercise();
}, []);


    //<Form/>

//i think all this needs to display is the form 

    return (
        <div>
            
            <Form/>
        </div>
    )
}

export default RebeccaGView;
