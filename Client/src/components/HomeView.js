import React, { useEffect, useState } from "react"; 

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
        <div>
            <h2>Hello!</h2>
			<h3> Learn English through trivia. </h3>
			 <div> 
			{triviaOfTheDay?
          	<p> On this day, in {triviaOfTheDay.year} : {triviaOfTheDay.text} </p>
			: <p> error </p>}
			 </div>		
        </div>
    )
}

export default HomeView;



