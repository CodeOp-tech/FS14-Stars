# FS14-Stars: A Language Learning App

## THE BACKEND

### THE DATABASE

A database with multiple tables was created using mySQL. Below is the diagram of the database, where the foreign keys are highlighted to match their parent keys.

![database](./public/images/databaseDiagram.jpg)

### THE ROUTES

Several routes were created to connect the app to the database. Each route contains GET and POST methods.

* /students 
* /teachers
* /users
* /exercises
* /items

## FRONT END COMPONENTS

### Sign Up Form
New users register using this form. Each time a new user signs up, their password is hashed by BCrypt before it is stored in the database. 
Depending on the user type, the data inputted by the user will be stored in routes that correspond to /teachers or /students.

### Login
Upon login, a token is created and stored in the Local Storage. When the user leaves the page, the token is removed. 
The authorization to view some pages is dependent on the user type. 

### Exercises
A list of exercises have been created for the students to answer. Upon submission, the exercises are marked and a score will be recorded in the student's profile page. 

### External API
We used an external API: Numbers from RapidApi to display a historical fact for the day as a short reading comprehension practice for anonymous users. 