DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS prepositions;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(200),
    email VARCHAR(500),
    type VARCHAR(10)
);

 
CREATE TABLE prepositions ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500)
); 

INSERT INTO users (username, password, email, type)
    VALUES ('Rebecca', '12345678', 'rebecca@codeop.com', 'teacher'),
           ('needEnglish', '87654321', 'needenglish@gmail.com', 'student');
 
INSERT INTO prepositions (seq, sentence, options, answer, explanation)  
    VALUES (1, 'There was once a woman who came <menu> Barcelona.', 'in, to, at', 'to','TO: PREPOSITION OF DIRECTION: To signifies orientation toward a goal.'),
           (2, 'No one knew where she came <menu>.', 'in, at, from', 'from', 'FROM: PREPOSITION OF DIRECTION: From refers to the starting point of departure or origin of an abject.'),
           (3, 'With her designer clothes and poise, people thought she came <menu> money.', 'at, from, of', 'from', 'TO COME FROM MONEY: to come from a rich family'),
           (4, 'At least, that was what I thought when she came <menu> the jewelry shop where I worked.', 'into, in, of, for', 'into', 'INTO: PREPOSITION OF DIRECTION: motion towards the inside of something.'), 
           (5, 'Intrigued <menu> her mysterious aura and her attractive face, the owner could not stop staring at her.', 'into, in, by', 'by', 'ADJECTIVES + by: By can be used after the following adjectives: surpised, shocked, astonished, stunned...'),
           (6, 'He started <menu> asking', 'out, in, to', 'out', 'TO START OUT: PHRASAL VERB: to begin.'), 
           (7, 'her <menu> her life', 'about, of, with', 'about', 'ABOUT: can be used as a preposition to mean "on the subject of" or "concerning"'),
           (8, 'before he moved on to asking her <menu> her number.', 'for, to, with', 'for', 'TO ASK FOR: PHRASAL VERB: To request for something.'), 
           (9, 'Later on, he called her up and manage to ask her <menu>.', 'to, out, of', 'out', 'TO ASK OUT: PHRASAL VERB: Invite someone out on a date.'),
           (10, 'The next day, I found him lying <menu> the floor, unconscious.', 'on, at, in', 'on', 'ON: PREPOSITION OF PLACE'),
           (11, 'When he finally came <menu>,', 'with, to, from', 'to', 'TO COME TO: PHRASAL VERB: to regain consciousness.'),
           (12, 'he looked for the woman but he found <menu> that she had already gone.', 'out, of, to', 'out', 'TO FIND OUT: PHRASAL VERB: to discover.'),
           (13, 'When we looked around, we realized that she had gotten <menu> the vault and had gotten our most expensive items.', 'at, to, into', 'into', 'TO GET INTO: PHRASAL VERB: to gain access to something.'),
           (14, 'We ran out of the shop in a rush and asked <menu> but she had disappeared without a trace.', 'for, around, to', 'around', 'TO ASK AROUND: PHRASAL VERB: to speak to a number of different people in order to try and get some information.');
      

