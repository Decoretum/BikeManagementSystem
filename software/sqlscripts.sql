USE `softwareengineering`;
USE `portfolio`;
SHOW DATABASES;
show tables;

desc achskills;


DROP TABLE `order_entry`;
DROP TABLE `bike_colors`;
DROP TABLE `bike_categories`;
dROP TABLE `categories`;
DROP TABLE `bike`;
DROP TABLE `orders`;

DESC `bike_colors`;
DESC `order_entry`;
DESC `bike`;
DESC `bike_categories`;

DELETE FROM `bike_colors`;
DELETE FROM `bike_categories`;
DELETE FROM `bike`;
DELETE FROM `orders`;
DELETE FROM `order_entry`;

DELETE FROM `categories`;


SELECT * FROM `bike`;
SELECT * FROM `bike_colors`;
SELECT * FROM `bike_categories`;
SELECT * FROM `categories`;
SELECT * FROM `orders`;
SELECT * FROM `order_entry`;




