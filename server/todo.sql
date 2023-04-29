use codingon;

DROP TABLE IF EXISTS todo;
CREATE TABLE todo (
	id INT PRIMARY KEY NOT NULL auto_increment,
	title VARCHAR(100) NOT NULL,
    done TINYINT(1) NOT NULL DEFAULT 0

);
-- INSERT INTO todo (title, done) VALUES("필라테스", 1);
-- INSERT INTO todo (title, done) VALUES("블로그 작성하기", 0);

-- use codingon;
-- 테이블 데이터 삭제 (Delete)

-- DELETE FROM todo WHERE id = 2;
-- DELETE FROM todo WHERE id = 3;
-- DELETE FROM todo WHERE id = 4;
-- DELETE FROM todo WHERE id = 5;
-- DELETE FROM todo WHERE id = 6;
-- DELETE FROM todo WHERE id = 7;
-- DELETE FROM todo WHERE id = 8;

use codingon;
INSERT INTO todo VALUES (null, 'my todo1', 0);
INSERT INTO todo VALUES (null, 'my todo2', 1);
INSERT INTO todo VALUES (null, 'my todo3', 0);
INSERT INTO todo VALUES (null, 'my todo4', 1);
INSERT INTO todo VALUES (null, 'my todo5', 1);
INSERT INTO todo VALUES (null, 'my todo6', 0);

use codingon;
DESC todo;
SELECT * FROM todo;