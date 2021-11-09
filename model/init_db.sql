-- deletes table if it already exists
SET foreign_key_checks = 0;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS exercises;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS teachers;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS scores;
SET foreign_key_checks = 1;

-- creates USERS table with the following specifications
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(200),
    email VARCHAR(500),
    type VARCHAR(10)
);

-- creates TEACHERS table with the following specifications
CREATE TABLE teachers (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    qualifications VARCHAR(100),
    experience INT,
    userID INT,
    FOREIGN KEY (userID) REFERENCES users(id) ON DELETE CASCADE
);

-- creates STUDENTS table with the following specifications
CREATE TABLE students (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    startLevel VARCHAR(100),
    currentLevel VARCHAR(100),
    userID INT,
    FOREIGN KEY (userID) REFERENCES users(id) ON DELETE CASCADE
);

-- creates EXERCISES table, connected to items table below
CREATE TABLE exercises ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(500),
    title VARCHAR(500),
    level VARCHAR(200)
);

-- creates ITEMS table, where exercise items are stored from create exercise form, grouped with foreign key exerciseID 
CREATE TABLE items ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(500),
    answer VARCHAR(500),
    explanation VARCHAR(5000),
    exerciseID INT NOT NULL,
    FOREIGN KEY (exerciseID) REFERENCES exercises(id) ON DELETE CASCADE
); 

-- creates SCORES table
CREATE TABLE scores ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    studentID INT NOT NULL,
    exerciseID INT NOT NULL,
    score INT,
    FOREIGN KEY (studentID) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (exerciseID) REFERENCES exercises(id) ON DELETE CASCADE
);


-- initial USERS table data
INSERT INTO users (username, password, email, type)
    VALUES ('Rebecca', '12345678', 'rebecca@teachme.com', 'teacher'),
           ('Shandy', 'shan0926', 'shandy@teachme.com', 'teacher'),
           ('needEnglish', '87654321', 'needenglish@gmail.com', 'student');
           

-- initial TEACHERS table, maybe a checkbox with multiple answers for qualification?
INSERT INTO teachers (qualifications, experience, userID)
    VALUES ('CELTA', 5, 1),
           ('CELTA, PGCEi', 10, 2);

-- initial STUDENTS table
INSERT INTO students (startLevel, currentLevel, userID)
    VALUES ('Beginner', 'Beginner', 3);
           


-- initial EXERCISES table data
INSERT INTO exercises (category, title, level) 
    VALUES ('prepositions', 'Mixed Prepositions Exercise', 'ADVANCED'),
           ('adjectives', 'Adjectives of Quantity', 'INTERMEDIATE');
 
-- initial ITEMS table data, consists of 2 exercises: prepositions and adjectives
INSERT INTO items (seq, sentence, options, answer, explanation, exerciseID)  
    VALUES (1, 'There was once a woman who came <menu> Barcelona.', 'in, to, at', 'to','TO: PREPOSITION OF DIRECTION: To signifies orientation toward a goal.', 1),
           (2, 'No one knew where she came <menu>.', 'in, at, from', 'from', 'FROM: PREPOSITION OF DIRECTION: From refers to the starting point of departure or origin of an abject.', 1),
           (3, 'With her designer clothes and poise, people thought she came <menu> money.', 'at, from, of', 'from', 'TO COME FROM MONEY: to come from a rich family', 1),
           (4, 'At least, that was what I thought when she came <menu> the jewelry shop where I worked.', 'into, in, of, for', 'into', 'INTO: PREPOSITION OF DIRECTION: motion towards the inside of something.', 1), 
           (5, 'Intrigued <menu> her mysterious aura and her attractive face, the owner could not stop staring at her.', 'into, in, by', 'by', 'ADJECTIVES + by: By can be used after the following adjectives: surpised, shocked, astonished, stunned...', 1),
           (6, 'He started <menu> asking', 'out, in, to', 'out', 'TO START OUT: PHRASAL VERB: to begin.', 1), 
           (7, 'her <menu> her life', 'about, of, with', 'about', 'ABOUT: can be used as a preposition to mean "on the subject of" or "concerning"', 1),
           (8, 'before he moved on to asking her <menu> her number.', 'for, to, with', 'for', 'TO ASK FOR: PHRASAL VERB: To request for something.', 1), 
           (9, 'Later on, he called her up and manage to ask her <menu>.', 'to, out, of', 'out', 'TO ASK OUT: PHRASAL VERB: Invite someone out on a date.', 1),
           (10, 'The next day, I found him lying <menu> the floor, unconscious.', 'on, at, in', 'on', 'ON: PREPOSITION OF PLACE', 1),
           (11, 'When he finally came <menu>,', 'with, to, from', 'to', 'TO COME TO: PHRASAL VERB: to regain consciousness.', 1),
           (12, 'he looked for the woman but he found <menu> that she had already gone.', 'out, of, to', 'out', 'TO FIND OUT: PHRASAL VERB: to discover.', 1),
           (13, 'When we looked around, we realized that she had gotten <menu> the vault and had gotten our most expensive items.', 'at, to, into', 'into', 'TO GET INTO: PHRASAL VERB: to gain access to something.', 1),
           (14, 'We ran out of the shop in a rush and asked <menu> but she had disappeared without a trace.', 'for, around, to', 'around', 'TO ASK AROUND: PHRASAL VERB: to speak to a number of different people in order to try and get some information.', 1),
           (1, 'I have <menu> time, can you hurry up?', 'little, few', 'little', '', 2),
           (2, 'I have <menu> money, what can I buy for you?', 'a little, few', 'a little', '', 2),
           (3, 'Can you give me <menu> minutes?', 'few, a few', 'a few', '', 2),
           (4, 'I have <menu> money, I cannot afford to go out.', 'a little, little', 'little', '', 2),
           (5, 'My family and I have <menu> arguments', 'little, few', 'few', '', 2),
           (6, 'They have <menu> education. He does not know how to write properly.', 'little, a little', 'little', '', 2);

-- initial SCORES table
INSERT INTO scores (studentID, exerciseID, score)
    VALUES (1, 1, 100);
