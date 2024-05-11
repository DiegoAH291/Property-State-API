CREATE DATABASE IF NOT EXISTS property_state;

USE property_state;

CREATE TABLE IF NOT EXISTS users (
id_user INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
id_user_firebase VARCHAR(255) UNIQUE NOT NULL,
photo_url VARCHAR(1000) DEFAULT "",
email VARCHAR(255) UNIQUE NOT NULL,
full_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS properties(
id_property INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
photo_url VARCHAR(255) NOT NULL,
title VARCHAR(255) NOT NULL,
location VARCHAR(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
status_property ENUM ("active" , "expired" , "sold") DEFAULT "active",
posted_on DATETIME DEFAULT CURRENT_TIMESTAMP,
id_user INT NOT NULL,
id_user_firebase VARCHAR(255) NOT NULL,

FOREIGN KEY (id_user) REFERENCES users(id_user),
FOREIGN KEY (id_user_firebase) REFERENCES users(id_user_firebase)
);