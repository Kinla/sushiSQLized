CREATE DATABASE IF NOT EXISTS sushi_db;
USE sushi_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS sushi;

-- Create the burgers table
CREATE TABLE sushi (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sushi_name VARCHAR(300) NOT NULL,
    devoured BOOLEAN DEFAULT false
);
