import React, {useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./ExerciseItems.css"
import Api from '../helpers/Api';
import Local from '../helpers/Local';
function ExerciseItems(props){
  const [exercise, setExercise] = useState({items: []});
  const [guesses, setGuesses] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(-1);
  let { id } = useParams();
  // Default ID in case none is provided; TEMPORARY
  if (!id) {
    id = 9;
  }
  const getExercise = () => {
  fetch(`/exercises/${id}`)
    .then(res => res.json())
    .then(json => {
       setExercise(json);
    })
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getExercise();
  }, []);
  // Compute the score and POST it to the server
  async function postScore() {
    let correct = 0;
    for (let item of exercise.items) {
      if (item.answer === guesses[item.id]) {
        correct++;
      }
    }
    let score = Math.round(correct / exercise.items.length * 100);
    setScore(score);
    Api.postScore(Local.getUserId(), exercise.id, score);
  }
function handleSubmit(e){
    e.preventDefault(e);
    showFunction()
    postScore();
};
function handleChange(e){
  //saves the changed menu value into the guesses obj
  setGuesses({ ...guesses, [e.target.name]: e.target.value});
}
const showFunction = (showAnswer) => {
    setShowAnswer(true)
}
function buildAnswer(item){
    if (item.answer === guesses[item.id]){
      return <span style={{color: "green"}}> Correct! </span>
    } else {
      return <span style={{color: "red"}}> {`Answer: ${item.answer}`} </span>
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
            <div className="showAnswer ms-4">
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
        <div className="card-header" style={{backgroundColor: "#CCE6FF"}}>
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
        {
          score >= 0 && (
            <div className="text-center p-3">
              <h3 className="ms-0">Your Score: {score}</h3>
            </div>
          )
        }
        </div>
    </div>
  </div>
    )
};
export default ExerciseItems;

