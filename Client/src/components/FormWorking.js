import React, {useState, useEffect} from "react";

function Form(){

 const [exObjs, setExObjs] = useState ([{sentence: "", options: "", answer: ""}]);
 const [guesses, setGuesses] = useState ({});
 const [showAnswer, setShowAnswer] = useState (false);
 //const to store exercise objects when i get them from server 
 //const to save the guesses 
 //const to store state to see whether or not the exercise has been submitted 
 
 const getExObjs = () => {
    fetch("/exercises") //need to change the fetch request 
      .then(res => res.json())
      .then(json => {
        setExObjs(json);
        
      })
      .catch(error => {
        console.log(error);
      });
  }
 //use effect with a get fetch to get the forms 
 //dont think there is a get for this yet but not sure 

    
 //handle submit 
//prevent default 
//pass the data to the parent - rebecca view
//reset form data 

 //handle change 
 //e.target.value 
 //save them in the guesses state - guesses set guesses 


//theres another one somewhere which checks to see if the form being submitted is true - 
//not sure where this goes 



//return section
//the form itself 
//container
//styling / offset 


//build sentence function 
//split the sentence on <menu> 
//select, options etc 
//

//map the sentence parts 

//show answers && i think the boolean to see if theyve submitted the form?
//if the boolean is correct then it should map the answers in the same one 

//compare answers function 

//handle submit - call handle submit function 
//on change - call on change function 




  return (
    <div className="Form">
      
      <div className="container">
         
       </div>
      
    </div>
    )

};


export default Form;