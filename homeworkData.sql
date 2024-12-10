CREATE DATABASE homeworkData;
USE homeworkData;

DROP TABLE IF EXISTS homeworkData;

CREATE TABLE homeworkData (
	id INT AUTO_INCREMENT,
    class VARCHAR(250),
    homework VARCHAR(250),
    link VARCHAR(250),
    dueDate DATETIME,
    priority INT,
    PRIMARY KEY (id)
    );
    
INSERT INTO homeworkData (class, homework, link, dueDate, priority)
VALUES ("SDEV 305", "Final Project", "http.finalProject", "2024-12-09 00:00:00", 1);
   
SELECT * FROM homeworkData;