USE `softwareengineering`;
USE `portfolio`;
SHOW DATABASES;
show tables;

desc achskills;

DROP TABLE `Appointment`;
DROP TABLE `order_entry`;
DROP TABLE `bike_colors`;
DROP TABLE `bike_categories`;
dROP TABLE `categories`;
DROP TABLE `orders`;
DROP TABLE `rented_bike`;
DROP TABLE `bike`;
DROP TABLE `Customer`;

DESC `bike_colors`;
DESC `order_entry`;
DESC `bike`;
DESC `bike_categories`;
DESC `Customer`;
DESC `Appointment`;

DELETE FROM `bike_colors`;
DELETE FROM `bike_categories`;
DELETE FROM `order_entry`;
DELETE FROM `orders`;
DELETE FROM `bike`;
DELETE FROM `Customer`;
DELETE FROM `categories`;
DELETE FROM `Appointment`;
DELETE FROM `rented_bike`;


SELECT * FROM `bike`;
SELECT * FROM `bike_colors`;
SELECT * FROM `bike_categories`;
SELECT * FROM `categories`;
SELECT * FROM `orders`;
SELECT * FROM `order_entry`;
SELECT * FROM `Customer`;
SELECT * FROM `Appointment`;
SELECT * FROM `rented_bike`;




