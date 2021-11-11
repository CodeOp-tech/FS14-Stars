import React, {useState, useEffect} from 'react'
// import { View, Text } from 'react-native'
import Form from '../components/Form.js';



function RebeccaGView () {

const [exObjs, setExObjs] = useState ([{sentence: "", options: "", answer: ""}]);

const getExObjs = () => {
console.log("hello");
fetch("/items") 
    .then(res => res.json())
    .then(json => {
        console.log(json);
       setExObjs(json);
       //console.log(json);
    })
    .catch((err) => console.log(err));
}

useEffect(() => {
getExObjs();
}, []);


    //<Form/>

//i think all this needs to display is the form 

    return (
        <div>
            <h2>It's me!</h2>
            <Form/>
        </div>
    )
}

export default RebeccaGView;
