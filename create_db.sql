# Create database script for D Rentals4U

# Create the database
CREATE DATABASE IF NOT EXISTS drentals_4u;
USE drentals_4u;

# Create the tables
CREATE TABLE IF NOT EXISTS cars (id INT AUTO_INCREMENT,name VARCHAR(50),price DECIMAL(5, 2) unsigned,PRIMARY KEY(id));

# Create the app user
CREATE USER IF NOT EXISTS 'drentals_booking_system'@'localhost' IDENTIFIED BY 'drentals2025'; 
GRANT ALL PRIVILEGES ON drentals_4u.* TO ' drentals_booking_system'@'localhost';