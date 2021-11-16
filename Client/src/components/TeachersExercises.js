import React, {useState, useEffect} from "react";



//teachers profile starts with links to all exercises 
//teacher clicks on a link and goes to this component 
//teacher sees a card with the original exercise - ok ignore this for now
//the card would not have to display all the code, just the original sentences 


//fetch 
//useEffect
//build sentence 
//map sentence 

//then in a separate card some input fields next to that with "sentence", "options", "answer"

//submit button 

//creates a new table in teachme

// CREATE TABLE teachersExercises ( 
//     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
//     seq INT,
//     sentence VARCHAR(5000), 
//     options VARCHAR(3000),
//     answer VARCHAR(500),
//     explanation VARCHAR(5000),
//     exerciseID INT NOT NULL,
//     FOREIGN KEY (exerciseID) REFERENCES exercises(id) ON DELETE CASCADE
// ); 

//would this be the same exerciseID or different -- i guess it could be different? it doesnt matter if it
//doesnt correspond?
//what about the foreign key?
//it would be the exerciseID referencing what the original exercise?
//i dont know enough about the tables and how they link 

//this would link to items with the same exercise ID right?

// INSERT INTO teachersExercises (seq, sentence, options, answer, explanation, exerciseID)  
//     VALUES (1, 'There was once a woman who came <menu> Barcelona.', 'in, to, at', 'to','TO: PREPOSITION OF DIRECTION: To signifies orientation toward a goal.', 1),
//            (2, 'No one knew where she came <menu>.', 'in, at, from', 'from', 'FROM: PREPOSITION OF DIRECTION: From refers to the starting point of departure or origin of an abject.', 1),
//            (3, 'With her designer clothes and poise, people thought she came <menu> money.', 'at, from, of', 'from', 'TO COME FROM MONEY: to come from a rich family', 1),
//            (4, 'At least, that was what I thought when she came <menu> the jewelry shop where I worked.', 'into, in, of, for', 'into', 'INTO: PREPOSITION OF DIRECTION: motion towards the inside of something.', 1),


//how do i transfer some e.target.values into the database?
//i have never put user input into database before 
//post, right, adds something 


//which creates a duplicate of the old exercise and replaces some of the e.target.values 
//saves the new exercise to the teachers profile as a link***
//a new route is created to fetch exercises from teachersexercises table
//fetched with the same id 

//i have 3 days to work on this i will just get started now 
