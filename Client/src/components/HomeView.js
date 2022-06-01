import React, { useEffect, useState } from "react"; 
import whello from './whello.jpg'


// import { View, Text } from 'react-native'

function HomeView () {
let d = new Date();
let month = d.getMonth();
let day = d.getDate();

const [triviaOfTheDay, setTriviaOfTheDay] = useState(null);
const [error, setError] = useState("");
	
	const getTrivia = () => {
		fetch(`https://numbersapi.p.rapidapi.com/${month}/${day}/date?fragment=true&json=true`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "numbersapi.p.rapidapi.com",
				"x-rapidapi-key": "5397a36c2emshcd031fcca8b995fp1b18c0jsnf5d7f894f041"
			}
		})	
	.then(response => response.json())
	.then(data => {setTriviaOfTheDay(data)})
	.catch(e => {
	  setError(
		"We are sad to say that we do not have today's trivia as of the moment. Please check back later."
	  );
	});
  return triviaOfTheDay;
};

useEffect(() => {
    getTrivia();
	console.log(triviaOfTheDay);
  }, []);

    return (
        <div className="logo">
		
			<h5 style={{ padding: "2rem", textAlign: "center", color:"teal"}}>Complete exercises - Find a tutor - Have fun learning</h5>
			<img src={whello} width="90%"/>
			<h3 style={{ padding: "1rem", textAlign: "center",color:"teal"}}> Learn English through trivia. </h3>
			
			 <div style={{textAlign: "center"}}> 
			{triviaOfTheDay?
          	<p> On this day, in {triviaOfTheDay.year} : {triviaOfTheDay.text}</p>
			: <p> error </p>}
			 </div>		
        </div>
    )
}

export default HomeView;



