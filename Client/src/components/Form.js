import React, {useState, useEffect} from "react";

function Form(){
 const [exObjs, setExObjs] = useState([{sentence: "", options: "", answer: ""}]); 
 const [guesses, setGuesses] = useState({});
 const [showAnswer, setShowAnswer] = useState(false); 


const getExObjs = () => {
  fetch("/exercises")
    .then(res => res.json())
    .then(json => {
      setExObjs(json);
      
    })
    .catch(error => {
      console.log(error);
    });
}

useEffect(() => {
  getExObjs();
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


  function buildAnswer(exObject){
    console.log(guesses[exObject.id]);
    if (exObject.answer === guesses[exObject.id]){
      return "Correct!"
    } else {
      return `Answer: ${exObject.answer}`
    }
  }

  function buildSentence(exObject) {
  // Split options into array of preps
  let prepArr = exObject.options.split(", ");

  // Convert/map arr of strings into array of <option> elements
  let optArr = prepArr.map((elem) => (
    <option value={elem}>{elem}</option>
    ))
  
  // Split sentence on <menu>, giving you the parts before & after
  let parts = exObject.sentence.split("<menu>");


  let sentence = (
      <div className="sentence"> 
          {parts[0]}
          <select id={'ex-'+exObject.id} name={exObject.id} onChange={handleChange} required>
              <option value="">choose one...</option>
              {optArr}
          </select>
          {parts[1]}
          <div className="showAnswer">
          {
            showAnswer && buildAnswer(exObject)
          }
            </div>
      </div>
  );

  return sentence;
};


  return (
    <div className="Form">
      
      <div className="container">
         
         <div className="card">
          <div className="card-header" style={{backgroundColor: "#cce6ff"}}>
              <h1>Prepositions</h1>
          </div>
          <div className="card-body">
               <h4 className="card-title">Exercise One</h4>       
          </div>
          </div>
          <div className="card">
          <form onSubmit={handleSubmit}>
            
          <ol>
            {
            exObjs.map(e => (
            <li className="mb-2" key={e.id}>
                {buildSentence(e)}
            </li>
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


export default Form;