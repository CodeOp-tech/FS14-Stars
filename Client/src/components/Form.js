import React, {useState, useEffect} from "react";

//does this need to change to items somewhere because of how its stored differently?
//items.id?
//items[id]
//items is an array of objects, not sure how to reference that 
//also do i want to store any of the other variables when i get the exercise object from the server?
//[{}] this is an array of objects 
// exObject.items[id]
// exObject.items[{id}]
//exObject.items.id
//item in singular
//still a bit confused about how this all fits in with the bigger object 
//is the bigger object an exObjs or exObj or somethig else


function Form(){
const [exercise, setExercise] = useState(null); //does this need to change
  //optionally store the explanation if i need to use it - so this should be correct the way this is stored 
    // const [guesses, setGuesses] = useState({});
  //  const [showAnswer, setShowAnswer] = useState(false); 


function handleSubmit(e){
    e.preventDefault(e);
    //showFunction()
};//reset form?

// function handleChange(e){
//     setGuesses({ ...guesses, [e.target.name]: e.target.value});
//     console.log(guesses)
// //saves the changed menu value into the guesses obj 
// }

// const showFunction = (showAnswer) => {
//     setShowAnswer(true)
// } 

// function buildAnswer(exObject){
//     console.log(guesses[exObject.id]);
//     if (exObject.answer === guesses[exObject.id]){
//       return "Correct!"
//     } else {
//       return `Answer: ${exObject.answer}`
//     }
// }

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

    let sentence = (
        <div className="sentence"> 
            {parts[0]}
            <select id={'ex-'+item.id} name={item.id} /*onChange={handleChange}*/ required>
                <option value="">choose one...</option>
                {optArr}
            </select>
            {parts[1]}
           
        </div>
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
                exercise && exercise.items.map(item => (
                    <li>{buildSentence(item)}</li>
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

{/* <ol>
          {
          exObjs.map(e => (
          <li className="mb-2" key={e.id}>
              {buildSentence(e)}
          </li>
          ))
          }
        </ol> */}