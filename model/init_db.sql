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
    qualifications VARCHAR(500),
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
    options VARCHAR(3000),
    answer VARCHAR(500),
    explanation VARCHAR(5000),
    exerciseID INT NOT NULL,
    FOREIGN KEY (exerciseID) REFERENCES exercises(id) ON DELETE CASCADE
); 

-- creates SCORES table
CREATE TABLE scores ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date_time DATETIME DEFAULT NOW(),
    studentID INT NOT NULL,
    exerciseID INT NOT NULL,
    score INT,
    FOREIGN KEY (studentID) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (exerciseID) REFERENCES exercises(id) ON DELETE CASCADE
);


-- initial USERS table data
-- hashed Passwords: Rebecca = pass1, Shandy=pass2, needEnglish = pass3
INSERT INTO users (username, password, email, type)
    VALUES ('Rebecca', '$2b$12$eFzMWbS9SogNtxkmo3J7aO8FQMFQSKbtpwLMIOVsF6GGKpTQdgq.W', 'rebecca@teachme.com', 'teacher'),
           ('Shandy', '$2b$12$WZcGPyrkCvD5e8m0Qz/nFOdBryUcsp6uDlE2MDo/AjuBhPrQBCfI6', 'shandy@teachme.com', 'teacher'),
           ('needEnglish', '$2b$12$tiAz4eaXlpU.CdltUVvw6udLA2BWsitk5zXM2XOm2IpAeAiFfMCdy', 'needenglish@gmail.com', 'student'),
           ('phuong', 'phuong12', 'phuong@gmail.com', 'student');

-- initial TEACHERS table, maybe a checkbox with multiple answers for qualification?
INSERT INTO teachers (qualifications, experience, userID)
    VALUES ('CELTA', 5, 1),
           ('CELTA, PGCEi', 10, 2);

-- initial STUDENTS table
INSERT INTO students (startLevel, currentLevel, userID)
    VALUES ('Beginner', 'Beginner', 3),
           ('Intermediate', 'Advanced', 4);
           


-- initial EXERCISES table data
INSERT INTO exercises (category, title, level) 
    VALUES ('prepositions', 'The Mysterious Woman: Mixed Prepositions Exercise', 'ADVANCED'),
           ('adjectives', 'Adjectives of Quantity', 'INTERMEDIATE'),
           ('prepositions', 'Mixed Prepositions Exercise', 'INTERMEDIATE'),
           ('preferences', 'Prefer / Would Prefer', 'INTERMEDIATE'),
           ('conditionals', 'Third Conditional', 'ADVANCED'),
           ('conditionals', 'Fourth Conditional', 'ADVANCED'),
           ('tenses', 'Past Simple vs Present Perfect', 'ADVANCED'),
           ('determiners', 'Determiners', 'ADVANCED'),
           ('conditionals', 'Second Conditional', 'INTERMEDIATE'),
           ('prepositions', 'Prepositions of Time', 'INTERMEDIATE'),
           ('tenses', 'Present Simple', 'BEGINNER'),
           ('adjectives', 'Adjectives with -ed / -ing', 'INTERMEDIATE'),
           ('tenses', 'Present Simple', 'BEGINNER'),
           ('tenses', 'Present Continuous', 'BEGINNER'),
           ('questions', 'Questions', 'BEGINNER');      
           
 
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
           (9, 'Later on, he called her up and managed to ask her <menu>.', 'to, out, of', 'out', 'TO ASK OUT: PHRASAL VERB: Invite someone out on a date.', 1),
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
           (6, 'They have <menu> education. He does not know how to write properly.', 'little, a little', 'little', '', 2),
           (1, "He got married <menu> his boss.", "with, to", "to ", "", 3),
           (2, "I found it <menu> the internet.", "in, on", "on", "", 3),
           (3, "I have known him <menu> two years.", "since, for", "for", "", 3),
           (4, "Can I borrow this <menu> you?", "of, from, to", "from", "", 3),
           (5, "Throw the rubbish <menu> the bin.", "at, to, in", "in", "", 3),
           (6, "She is <menu> her mobile.", "with, on", "on", "", 3),
           (7, "Can you translate this <menu> Chinese for me?", "in, to, into", "into", "", 3),
           (8, "They stopped him <menu> stealing the bike.", "to, from, with", "from ", "", 3),
           (9, "They stopped him <menu> ask for directions.", "to, for, by", "to", "", 3),
           (10, "We were bored <menu> the film.", "about, by", "by", "", 3),
           (1, 'I prefer dancing <menu> singing.', 'than, to', 'to', '', 4),
            (2, 'I prefer to dance <menu> to sing.', 'than, to', 'than', '', 4),
            (3, 'I prefer reading <menu> writing.', 'than, to', 'to', '', 4),
            (4, 'I would prefer to eat a pear <menu> a pineapple.', 'than, to', 'than', '', 4),
            (5, 'I prefer oranges <menu> apples.', 'than, to', 'to', '', 4),
            (6, 'I would rather take the bus <menu> take a taxi.', 'than, to', 'than', '', 4),
            (1, "If I <menu> eaten that sandwich, I would not have felt so ill yesterday.", "had not, have not, would not", "had not", "", 5),
            (2, "If I <menu> you would be so late, I wouldn't have come.", "would have known, had known", "had known", "", 5),
            (3, "If he <menu> me he wasn't coming yesterday, it would have saved me some time.", "would have told, have told, had told", "had told", "", 5),
            (4, "If you had left earlier, you <menu> missed the train.", "wouldn't have, would have", "wouldn't have", "", 5),
            (5, "He could have gone to France if he <menu> the opportunity.", "had had, have had", "had had", "", 5),
            (6, "I would have stayed longer if <menu> possible.", "it would have been, it had been", "it had been", "", 5),
            (7, "If you had asked politely, you <menu> got what you wanted.", "would have, wouldn't have", "would have", "", 5),
            (1, "If I <menu> eaten that sandwich, I wouldn't be feeling ill now.", "had not, have not, would not", "had not", "", 6),
               (2, "If you <menu> more careful before, you wouldn't be in hospital now.", "had been, would have been", "had been", "", 6),
               (3, "If you had warned me earlier, we <menu> in this situation now.", "would have been, wouldn't have been, wouldn't be", "wouldn't be", "", 6),
               (4, "If I <menu> my flight, I would not be married now.", "hadn't missed, wouldn't have missed", "hadn't missed", "", 6),
               (5, "If we hadn't won the lottery, we <menu> millionaires.", "would be, wouldn't be", "wouldn't be", "", 6),
               (6, "If I <menu> that internet meme, I wouldn't be famous now.", "hadn't made, wouldn't have made", "hadn't made", "", 6),
               (7, "If the bank <menu> me money, I wouldn't be successful today.", "had loaned, hadn't loaned", "hadn't loaned", "", 6),
               (1, "I <menu> her for ten months now.", "knew, have known", "have known", "", 7),
               (2, "I <menu> to Japan.", "never went, have never been", "have never been", "", 7),
               (3, "The bus fare was £1.50 last week, now it's £2. The bus fare <menu> up.", "has gone, went", "has gone", "", 7),
               (4, "Robert is still here. He <menu> out yet.", "hasn't gone, didn't go", "hasn't gone", "", 7),
               (5, "I <menu> to the Bahamas two years ago.", "have been, went", "went", "", 7),
               (6, "Are your friends still here or <menu> home?", "did they go, have they gone", "have they gone", "", 7),
               (7, "What's the most beautiful place you <menu> visited?", "ever, have ever", "have ever", "", 7),
               (1, "This house is so beautiful. Does it have <menu> garden?", "a, an, the", "a", "", 8),
               (2, "It's a beautiful day. Shall we sit in <menu> garden?", "a, an, the", "the", "", 8),
               (3, "Could you tell me where <menu> bank is?", "a, an, the", "the", "", 8),
               (4, 'We are staying at <menu> best hotel on the beach.', 'a, an, the', 'the', '', 8),
               (5, 'We had a nice lunch in <menu> new restaurant you told us about.', 'a, an, the', 'the', '', 8),
               (6, 'Can you recommend me <menu> good nightclub?', 'a, an, the', 'a', '', 8),
               (7, 'My friend has <menu> Spanish name, but both her parents are English.', 'a, an, the', 'a', '', 8),
               (1, "If I <menu> rich, I would buy a house.", "am, were, would be", "were", "", 9),
               (2, "If I <menu> more time, I would be able to finish my work properly.", "have, had, would have", "had", "", 9),
               (3, "If they <menu> harder, they would be more successful.", "work, worked", "worked", "", 9),
               (4, "They <menu> if they relaxed more.", "would be happier, were happier", "would be happier", "", 9),
               (5, "I would buy food for the homeless if <menu> afford it.", "I could, I could have", "I could", "", 9),
               (6, "Would you spend more time with me if you <menu> so busy?", "were, weren't", "weren't", "", 9),
               (7, "If you had a dog, what <menu> call it?", "would you, did you", "would you", "", 9),
                (1, "Pablo Picasso was born <menu> 1881.", "on, of, in", "in", "", 10),
               (2, "Our family love to decorate the house <menu> Christmas.", "on, at, in", "at", "", 10),
               (3, "There are usually parties on campus <menu> Friday nights.", "in, on, at", "on", "", 10),
               (4, "My course finishes <menu> July.", "in, on, at", "in", "", 10),
               (5, "The class starts <menu> 7 o'clock.", "in, on, at", "at", "", 10),
               (6, "Unfortunately he won't be available <menu> the afternoon.", "in, on, at", "in", "", 10),
               (7, "I'll be ready <menu> a moment.", "in, on, at", "in", "", 10),
               (1, "The moon <menu> around the Earth.", "goes, is going", "goes", "", 11),
               (2, "I <menu> with my parents until I can afford my own flat.", "am living, live", "am living", "", 11),
               (3, "We usually <menu> vegetables every day.", "eat, are eating", "eat", "", 11),
               (4, "They <menu> at 6 o'clock every morning.", "wake up, are waking up", "wake up", "", 11),
               (5, "The milkman <menu> fresh milk every morning.", "delivers, is delivering", "delivers", "", 11),
               (6, "The milkman <menu> the milk very late this morning.", "delivers, is delivering", "is delivering", "", 11),
               (7, "Can you call me later? I <menu> right now.", "eat, am eating", "am eating", "", 11),
               (1, "I thought the film was a bit <menu>.", "disappointed, disappointing", "disappointing", "", 12),
               (2, "I was a bit <menu> by the film.", "disappointed, disappointing", "disappointed", "", 12),
               (3, "She likes her job a lot but it can be <menu> sometimes.", "exhausted, exhausting", "exhausting", "", 12),
               (4, "I'm not really <menu> in football.", "interested, interesting", "interested", "", 12),
               (5, "I really hate this <menu> weather.", "depressed, depressing", "depressing", "", 12),
               (6, "It can be <menu> to ask people for money.", "embarrassing, embarrassed", "embarrassing", "", 12),
               (7, "He is one of the most <menu> people I have ever met.", "boring, bored", "boring", "", 12),
               (1, "Tanya <menu> French fluently.", "speak, speaks", "speaks", "", 13),
               (2, "Olivia and Alice <menu> to the same club.", "go, goes", "go", "", 13),
               (3, "Allen <menu> eat meat.", "don't, doesn't", "doesn't", "", 13),
               (4, "Where <menu> Maria come from? Is she Spanish?", "do, does", "does", "", 13),
               (5, "Vegetarians <menu> eat meat.", "don't, doesn't", "don't", "", 13),
               (6, "The museum <menu> at 5pm.", "closes, close", "closes", "", 13),
               (7, "How often <menu> tennis?", "you play, do you play", "do you play", "", 13),
               (1, "He <menu> football tonight.", "playing, is playing, are playing", "is playing", "", 14),
               (2, "What <menu> tomorrow?", "happens, is happening, happening", "is happening", "", 14),
               (3, "What <menu> you eating?", "is, are", "are", "", 14),
               (4, "Where <menu> you going?", "is, do, are", "are", "", 14),
               (5, "Hurry up, everybody <menu> waiting for you.", "is, are", "is", "", 14),
               (6, "Many people <menu> not travelling this summer.", "is, are", "are", "", 14),
               (7, "You <menu> losing your keys.", "are always, always", "are always", "", 14),
               (1, "Where <menu> you live?", "do, does, is", "do", "", 15),
               (2, "What <menu> you doing?", "is, are", "are", "", 15),
               (3, "Where <menu> they work?", "do, does", "do", "", 15),
               (4, "What <menu> for?", "are you look, is you looking, are you looking", "are you looking", "", 15),
               (5, "How many languages <menu> speak?", "is you, do you, can you", "can you", "", 15),
               (6, "Why <menu> you happy today?", "isn't, aren't, don't", "aren't", "", 15),
               (7, "Why <menu> you tell me the problem?", "won't, will not", "won't", "", 15);

    
               

-- initial SCORES table
INSERT INTO scores (studentID, exerciseID, score)
    VALUES (1, 1, 100),
           (1, 2, 30),
           (2, 1, 80),
           (2, 3, 70);
