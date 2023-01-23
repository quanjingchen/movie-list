CREATE DATABASE movielist;

USE movielist;
  /* Describe your table here.*/

CREATE TABLE movies (
  id int(5) not null primary key auto_increment,
  title varchar(255) not null,
  `url` varchar(255),
  release_date varchar(20),
  vote_average Decimal(2,1),
  vote_count int(10),
  overview varchar(1000),
  watched TINYINT(1) DEFAULT false,
  timeCreated datetime DEFAULT CURRENT_TIMESTAMP
);


-- params [
--   'Harry Potter and the Goblet of Fire',
--   'https://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg',
--   '2005-11-16',
--   7.8,
--   18157,
--   "When Harry Potter's name emerges from the Goblet of Fire, he becomes a competitor in a grueling battle for glory among three wizarding schools—the Triwizard Tournament. But since Harry never submitted his name for the Tournament, who did? Now Harry must confront a deadly dragon, fierce water demons and an enchanted maze only to find himself in the cruel grasp of He Who Must Not Be Named."
-- ]




-- SELECT * FROM messages m INNER JOIN users u ON m.user_id = u.id;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

