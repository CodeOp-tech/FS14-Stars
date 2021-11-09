DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS prepositions;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(200),
    email VARCHAR(500),
    type VARCHAR(10)
);

/*correct IDs*/
 
CREATE TABLE prepositions ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500)
); 

INSERT INTO users (username, password, email, type)
    VALUES ("Rebecca", "12345678", "rebecca@codeop.com", "teacher"),
           ("needEnglish", "87654321", "needenglish@gmail.com", "student");
 
INSERT INTO prepositions (seq, sentence, options, answer, explanation)  
    VALUES (1, "There was once a woman who came <menu> Barcelona.", "in, to, at", "to","TO: PREPOSITION OF DIRECTION: To signifies orientation toward a goal."),
           (2, "No one knew where she came <menu>.", "in, at, from", "from", "FROM: PREPOSITION OF DIRECTION: From refers to the starting point of departure or origin of an abject."),
           (3, "With her designer clothes and poise, people thought she came <menu> money.", "at, from, of", "from", "TO COME FROM MONEY: to come from a rich family"),
           (4, "At least, that was what I thought when she came <menu> the jewelry shop where I worked.", "into, in, of, for", "into", "INTO: PREPOSITION OF DIRECTION: motion towards the inside of something."), 
           (5, "Intrigued <menu> her mysterious aura and her attractive face, the owner could not stop staring at her.", "into, in, by", "by", "ADJECTIVES + by: By can be used after the following adjectives: surpised, shocked, astonished, stunned..."),
           (6, "He started <menu> asking", "out, in, to", "out", "TO START OUT: PHRASAL VERB: to begin."), 
           (7, "her <menu> her life", "about, of, with", "about", "ABOUT: can be used as a preposition to mean "on the subject of" or "concerning""),
           (8, "before he moved on to asking her <menu> her number.", "for, to, with", "for", "TO ASK FOR: PHRASAL VERB: To request for something."), 
           (9, "Later on, he called her up and manage to ask her <menu>.", "to, out, of", "out", "TO ASK OUT: PHRASAL VERB: Invite someone out on a date."),
           (10, "The next day, I found him lying <menu> the floor, unconscious.", "on, at, in", "on", "ON: PREPOSITION OF PLACE"),
           (11, "When he finally came <menu>,", "with, to, from", "to", "TO COME TO: PHRASAL VERB: to regain consciousness."),
           (12, "he looked for the woman but he found <menu> that she had already gone.", "out, of, to", "out", "TO FIND OUT: PHRASAL VERB: to discover."),
           (13, "When we looked around, we realized that she had gotten <menu> the vault and had gotten our most expensive items.", "at, to, into", "into", "TO GET INTO: PHRASAL VERB: to gain access to something."),
           (14, "We ran out of the shop in a rush and asked <menu> but she had disappeared without a trace.", "for, around, to", "around", "TO ASK AROUND: PHRASAL VERB: to speak to a number of different people in order to try and get some information.");



CREATE TABLE adjectives ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
); 

INSERT INTO adjectives (seq, sentence, options, answer)  
    	VALUES (1, "I have <menu> time, can you hurry up?", "little, few", "little"),
               (2, "I have <menu> money, what can I buy for you?", "a little, few", "a little"),
               (3, "Can you give me <menu> minutes?", "few, a few", "a few"),
               (4, "I have <menu> money, I cannot afford to go out.", "a little, little", "little"),
               (5, "My family and I have <menu> arguments.", "little, few", "few"),
               (6, "They have <menu> education. He does not know how to write properly.", "little, a little", "little");
               

CREATE TABLE duration ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500)
);                

INSERT INTO duration (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, "I have been living in Barcelona <menu> 6 months.", "for, since, during", "for", "", 3),
               (2, "I have been playing the guitar <menu> January.", "for, since, during", "since", "", 3),
               (3, "They have only known each other <menu> this morning.", "for, since, during", "since", "", 3),
               (4, "We talked for a while <menu> the holiday.", "for, since, during", "during", "", 3),
               (5, "They have been in a relationship <menu> a long time.", "for, since, during", "for", "", 3),
               (6, "We met <menu> Christmas.", "for, since, during", "during", "", 3),
               (7, "I have been waiting for you <menu> 9 o'clock.", "for, since, during", "since", "", 3),
               (8, "I have been waiting for you <menu> hours.", "for, since, during", "for", "", 3);

               
CREATE TABLE preferences ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
);    

INSERT INTO preferences (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, 'I prefer dancing <menu> singing.', 'than, to', 'to', '', 4),
               (2, 'I prefer to dance <menu> to sing.', 'than, to', 'than', '', 4),
               (3, 'I prefer reading <menu> writing.', 'than, to', 'to', '', 4),
               (4, 'I would prefer to eat a pear <menu> a pineapple.', 'than, to', 'than', '', 4),
               (5, 'I prefer oranges <menu> apples.', 'than, to', 'to', '', 4),
               (6, 'I would rather take the bus <menu> take a taxi.', 'than, to', 'than', '', 4);


CREATE TABLE conditionals3 ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
);    


INSERT INTO conditionals3 (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, "If I <menu> .", "had not, have not, would not", "had not", "", 5),
               (2, "If I <menu> you would be so late, I wouldn't have come.", "would have known, had known", "had known", "", 5),
               (3, " <menu> .", "than, to", "than", "", 5),
               (4, ' <menu> .', 'than, to', 'than', '', 5),
               (5, ' <menu> .', 'than, to', 'than', '', 5),
               (6, ' <menu> .', 'than, to', 'than', '', 5),
               (7, ' <menu> .', 'than, to', 'than', '', 5);


CREATE TABLE conditionals4 ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
);    

INSERT INTO conditionals4 (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, "If I <menu> eaten that sandwich, I wouldn't be feeling ill now.", "had not, have not, would not", "had not", "", 6),
               (2, "If I <menu> .", "would have known, had known", "had known", "", 6),
               (3, " <menu> .", "than, to", "than", "", 6),
               (4, ' <menu> .', 'than, to', 'than', '', 6),
               (5, ' <menu> .', 'than, to', 'than', '', 6),
               (6, ' <menu> .', 'than, to', 'than', '', 6),
               (7, ' <menu> .', 'than, to', 'than', '', 6);


CREATE TABLE tense ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
);           

/*the answer data is too long*/
INSERT INTO tense (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, "I <menu> her for ten months.", "knew, have known", "have known", "", 7),
               (2, "I <menu> to Japan.", "never went, have never been", "have never been", "", 7),
               (3, " <menu> .", ", to", "than", "", 7),
               (4, ' <menu> .', 'than, to', 'than', '', 7),
               (5, ' <menu> .', 'than, to', 'than', '', 7),
               (6, ' <menu> .', 'than, to', 'than', '', 7),
               (7, ' <menu> .', 'than, to', 'than', '', 7);


CREATE TABLE determiner ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
);  

INSERT INTO determiner (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, "This house is so beautiful. Does it have <menu> garden?", "a, an, the", "a", "", 8),
               (2, "It's a beautiful day. Shall we sit in <menu> garden?", "a, an, the", "the", "", 8),
               (3, "Could you tell me where <menu> bank is?", "a, an, the", "the", "", 8),
               (4, 'We are staying at <menu> best hotel on the beach.', 'a, an, the', 'the', '', 8),
               (5, 'We had a nice lunch in <menu> new restaurant you told us about.', 'a, an, the', 'the', '', 8),
               (6, 'Can you recommend me <menu> good nightclub?', 'a, an, the', 'a', '', 8),
               (7, 'My friend has <menu> Spanish name, but both her parents are English.', 'a, an, the', 'a', '', 8);


CREATE TABLE verbPreposition ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
);  

INSERT INTO verbPreposition (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, "He got married <menu> his boss.", "with, to", "to ", "", 10),
               (2, "I found it <menu> the internet.", "in, on", "on", "", 10),
               (3, "I have known him <menu> two years.", "since, for", "for", "", 10),
               (4, "Can I borrow this <menu> you?", "of, from, to", "from", "", 10),
               (5, "Throw the rubbish <menu> the bin.", "at, to, in", "in", "", 10),
               (6, "She is <menu> her mobile.", "with, on", "on", "", 10),
               (7, "Can you translate this <menu> Chinese for me?", "in, to, into", "into", "", 10),
               (8, "They stopped him <menu> stealing the bike.", "to, from, with", "from ", "", 10),
               (9, "They stopped him <menu> ask for directions.", "to, for, by", "to", "", 10),
               (10, "We were bored <menu> the film.", "about, by", "by", "", 10);

/*intermediate section*/

CREATE TABLE conditionals2 ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
);    

INSERT INTO conditionals2 (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, "If I <menu> rich, I would buy a house.", "am, were, would be", "were", "", 11),
               (2, "If I <menu> more time, I would be able to finish my work properly.", "have, had, would have", "had", "", 11),
               (3, " <menu> .", "than, to", "than", "", 11),
               (4, " <menu> .", "than, to", "than", "", 11),
               (5, " <menu> .", "than, to", "than", "", 11),
               (6, " <menu> .", "than, to", "than", "", 11),
               (7, " <menu> .", "than, to", "than", "", 11);
              

CREATE TABLE prepositionsIntermediate ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
);    

INSERT INTO prepositionsIntermediate (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, "Pablo Picasso was born <menu> 1881.", "on, of, in", "in", "", 12),
               (2, "Our family love to decorate the house <menu> Christmas.", "on, at, in", "at", "", 12),
               (3, "There are usually parties on campus <menu> Friday nights.", "in, on, at", "on", "", 12),
               (4, "My course finishes <menu> July.", "in, on, at", "in", "", 12),
               (5, "The class starts <menu> 7 o'clock.", "in, on, at", "at", "", 12),
               (6, "Unfortunately he won't be available <menu> the afternoon.", "in, on, at", "in", "", 12),
               (7, "I'll be ready <menu> a moment.", "in, on, at", "in", "", 12);

CREATE TABLE present ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
);                 

INSERT INTO present (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, "The moon <menu> around the Earth.", "goes, is going", "goes", "", 9),
               (2, "I <menu> with my parents until I can afford my own flat.", "am living, live", "am living", "", 9),
               (3, "We usually <menu> vegetables every day.", "eat, are eating", "eat", "", 9),
               (4, "They <menu> at 6 o'clock every morning.", "wake up, are waking up", "wake up", "", 9),
               (5, "The milkman <menu> fresh milk every morning.", "delivers, is delivering", "delivers", "", 9),
               (6, "The milkman <menu> the milk very late this morning.", "delivers, is delivering", "is delivering", "", 9),
               (7, "Can you call me later? I <menu> right now.", "eat, am eating", "am eating", "", 9);               


CREATE TABLE adjectivesIntermediate ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
);    

/*is this going to break code if nothing after <menu>*/
INSERT INTO adjectivesIntermediate (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, "I thought the film was a bit <menu>.", "disappointed, disappointing", "disappointing", "", 13),
               (2, "I was a bit <menu> by the film.", "disappointed, disappointing", "disappointed", "", 13),
               (3, " <menu> .", ", ", "than", "", 13),
               (4, " <menu> .", ", ", "than", "", 13),
               (5, " <menu> .", ", ", "than", "", 13),
               (6, " <menu> .", ", ", "than", "", 13),
               (7, " <menu> .", ", ", "than", "", 13);

CREATE TABLE  ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
);    

INSERT INTO  (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, " <menu> .", ", ", "had not", "", 14),
               (2, " <menu> .", ", ", "", "", 14),
               (3, " <menu> .", ", ", "than", "", 14),
               (4, " <menu> .", ", ", "than", "", 14),
               (5, " <menu> .", ", ", "than", "", 14),
               (6, " <menu> .", ", ", "than", "", 14),
               (7, " <menu> .", ", ", "than", "", 14);                              

CREATE TABLE  ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
);    

INSERT INTO  (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, " <menu> .", ", ", "had not", "", 15),
               (2, " <menu> .", ", ", "", "", 15),
               (3, " <menu> .", ", ", "than", "", 15),
               (4, " <menu> .", ", ", "than", "", 15),
               (5, " <menu> .", ", ", "than", "", 15),
               (6, " <menu> .", ", ", "than", "", 15),
               (7, " <menu> .", ", ", "than", "", 15);

CREATE TABLE  ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    seq INT,
    sentence VARCHAR(5000), 
    options VARCHAR(100),
    answer VARCHAR(10),
    explanation VARCHAR(500),
    exerciseID INT NOT NULL
);    

INSERT INTO  (seq, sentence, options, answer, explanation, exerciseID)  
        VALUES (1, " <menu> .", ", ", "had not", "", 16),
               (2, " <menu> .", ", ", "", "", 16),
               (3, " <menu> .", ", ", "than", "", 16),
               (4, " <menu> .", ", ", "than", "", 16),
               (5, " <menu> .", ", ", "than", "", 16),
               (6, " <menu> .", ", ", "than", "", 16),
               (7, " <menu> .", ", ", "than", "", 16);