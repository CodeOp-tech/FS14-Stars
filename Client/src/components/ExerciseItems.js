import React, {useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./ExerciseItems.css"

function ExerciseItems(props){
  const [exercise, setExercise] = useState({items: []}); 
  const [guesses, setGuesses] = useState({});
  const [showAnswer, setShowAnswer] = useState(false); 
  let { id } = useParams();

  // Default ID in case none is provided
  if (!id) {
    id = 9;
  }

  const getExercise = () => {
  fetch(`/exercises/${id}`) 
    .then(res => res.json())
    .then(json => {
         console.log(json);
       setExercise(json);
    })
    .catch((err) => console.log(err));

  }
useEffect(() => {
getExercise();
}, []);


function handleSubmit(e){
    e.preventDefault(e);
    showFunction()
};

function handleChange(e){
    setGuesses({ ...guesses, [e.target.name]: e.target.value});
    console.log(guesses)
//saves the changed menu value into the guesses obj 
}

const showFunction = (showAnswer) => {
    setShowAnswer(true)
} 

function buildAnswer(item){
    console.log(guesses[item.id]);
    if (item.answer === guesses[item.id]){
      return "Correct!"
    } else {
      return `Answer: ${item.answer}`
    }
}

function buildSentence(item) {
    // Split options into array of preps
    let prepArr = item.options.split(", ");
  
    // Convert/map arr of strings into array of <option> elements
    let optArr = prepArr.map((elem) => (
      <option value={elem}>{elem}</option>
      ))
    
    // Split sentence on <menu>, giving you the parts before & after
    let parts = item.sentence.split("<menu>"); //maybe theres a mistake here, depending on 
    //what exactly exObject refers to 


    //select required, requires them to fill in all elements in the form required
    let sentence = (
      <tr> 
        <td className="sentence">
            {parts[0]}
            <select id={'ex-'+item.id} name={item.id} onChange={handleChange} >
                <option value="">choose one...</option>
                {optArr}
            </select>
            {parts[1]}
            </td>
            <td>
            <div className="showAnswer">
              
          {
            showAnswer && buildAnswer(item)
          }
          
            </div>
            </td>
        </tr>
    );
  
    return sentence;
  };


  //     <h2>{exercise.title}</h2>
  //<h3>{exercise.level}</h3>   
return (
    <div className="Form">
      
    <div className="container">
       
       <div className="card">
        <div className="card-header" style={{backgroundColor: "#cce6ff"}}>
        <h2>{exercise.title}</h2>
            
        </div>
        <div className="card-body">
             <h4 className="card-title">{exercise.level}</h4>  
        
        </div>
        </div>
        <div className="card">
        <form onSubmit={handleSubmit}>
       
          
            <ol>
            {
               exercise && exercise.items.map(item => (
                    <li className="mr-2" key={item.id}>{buildSentence(item)}</li>
                    
                ))
            }
            </ol>
           
        
            <button type="submit" className="btn btn-primary">Get Answers</button>
        </form>
        </div>
    </div>
  </div>
    )

};
    
export default ExerciseItems;    

