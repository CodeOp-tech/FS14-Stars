import logo from './logo.svg';
import './App.css';
import Form from './Components/Form.js';
import React, {useState, useEffect} from "react";

//convert this to use the correct syntax 
//this might all go on the main app page i think 

function App() {

//loads the exercise object upon starting the page

const [exObjs, setExObjs] = useState([]); 

const getExObjs = () => {
  fetch("/exercises") //need to change this to the correct 'prepositions' one 
    .then(res => res.json())
    .then(json => {
      setExObjs(json);
      console.log(json);
    })
    .catch(error => {
      console.log(error);
    });
}

useEffect(() => {
  getExObjs();
}, []);

return (
<div className="App">
  <Form/>
</div>
)
}

export default App;

