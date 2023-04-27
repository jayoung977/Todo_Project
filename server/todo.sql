use codingon;


CREATE TABLE todo (
	id INT PRIMARY KEY NOT NULL auto_increment,
	title VARCHAR(100) NOT NULL,
    done TINYINT(1) NOT NULL DEFAULT 0

);
INSERT INTO todo (title, done) VALUES("필라테스", 1);
INSERT INTO todo (title, done) VALUES("블로그 작성하기", 0);


use codingon;
DESC todo;
SELECT * FROM todo;