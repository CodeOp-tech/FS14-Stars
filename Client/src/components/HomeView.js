import React, { useState } from "react";
// import { View, Text } from 'react-native'

function HomeView () {
	let emptyForm = {
		month: "month",
		day: "day"
	}

	const [date, setDate] = useState(emptyForm);
	const [triviaOfTheDay, setTriviaOfTheDay] = useState(null);
	const [error, setError] = useState("");
  
	const handleChange = e => {
		let {name, value} = e.target;
		setDate(form => ({...form, [name]: value}))
	}
	
	const handleSubmit = e => {
		e.preventDefault();
		getTrivia(date);
		setDate(emptyForm);
	  };
	
	const getTrivia = () => {
		fetch(`https://numbersapi.p.rapidapi.com/${date.month}/${date.day}/date?fragment=true&json=true`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "numbersapi.p.rapidapi.com",
				"x-rapidapi-key": "5397a36c2emshcd031fcca8b995fp1b18c0jsnf5d7f894f041"
			}
		})	
	.then(response => response.json())
	.then(data => {
	  setTriviaOfTheDay(data);
	})
	.catch(e => {
	  setError(
		"Sorry. The word of the day is unavailable for the date that you entered."
	  );
	});
  return triviaOfTheDay;
};

    return (
        <div>
            <h2>Hello!</h2>
			<h3> Learn English through trivia. </h3>
			<p> Enter a date in numbers. </p>
			<form onSubmit={handleSubmit}>        
				<input type="number"
          				name="month"
						min = "1"
						max = "12"  
						value={date.month}
          				onChange={handleChange}
          				>
				</input>
				<input type="number"
          				name="day"
						min = "1"
						max = "31"
						value={date.day}
          				onChange={handleChange}
          				>
				</input>
				<button type="submit">Submit</button>
			</form>
			<div>  {triviaOfTheDay ? (
          	<p> On this day: {triviaOfTheDay.text} </p>
        	) : (
          		<p> {error} </p>
        	)}
			</div>
        </div>
    )
}

export default HomeView;



