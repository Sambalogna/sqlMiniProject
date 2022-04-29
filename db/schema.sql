DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies (
    id INT NOT NUll AUTO_INCREMENT PRIMARY KEY,
    movie_name VARCHAR(30)
);

CREATE TABLE reviews (
    review TEXT
    FOREIGN KEY (movies_id)
    REFERENCES movies(id)
    ON DELETE SET NUll
);