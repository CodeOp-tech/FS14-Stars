import React, {useState, useEffect} from "react";

function Form(){

const [exObjs, setExObjs] = useState ([{sentence: "", options: "", answer: ""}]);

const getExObjs = () => {

  const getExObjs = () => {
    fetch("/items") 
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

//ok so here i will get the exercises and they will be saved in the use state 
//how do i display them on the page?

return (
    <div className="Form">
        
        <div className="container">
            
        </div>
        
    </div>
    )

};
    
export default Form;    