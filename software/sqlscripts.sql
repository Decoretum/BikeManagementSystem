USE `softwareengineering`;

SHOW DATABASES;
show tables;

desc achskills;

DROP TABLE `Appointment`;
DROP TABLE `order_entry`;
DROP TABLE `bike_colors`;
DROP TABLE `bike_categories`;
DROP TABLE `categories`;
DROP TABLE `orders`;
DROP TABLE `rented_bike`;
DROP TABLE `bike`;
DROP TABLE `Customer`;

DESC `bike_colors`;
DESC `order_entry`;
DESC `orders`;
DESC `bike`;
DESC `bike_categories`;
DESC `Customer`;
DESC `Appointment`;

DELETE FROM `bike_colors`;
DELETE FROM `bike_categories`;
DELETE FROM `categories`;
DELETE FROM `Appointment`;
DELETE FROM `rented_bike`;
DELETE FROM `order_entry`;
DELETE FROM `orders`;
DELETE FROM `bike`;
DELETE FROM `Customer`;


SELECT * FROM `bike`;
SELECT * FROM `bike_colors`;
SELECT * FROM `bike_categories`;
SELECT * FROM `categories`;
SELECT * FROM `orders`;
SELECT * FROM `order_entry`;
SELECT * FROM `Customer`;
SELECT * FROM `Appointment`;
SELECT * FROM `rented_bike`;

DELETE FROM `rented_bike`;

ALTER TABLE Appointment
modify customer_id bigint(20);

appointment	CREATE TABLE `appointment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `cost` decimal(38,2) NOT NULL,
  `date_time_appointed` varchar(255) NOT NULL,
  `date_time_created` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `ongoing` bit(1) NOT NULL,
  `customer_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKmyowslj1th8d9j6j3wlbwrtoe` (`customer_id`),
  CONSTRAINT `FKmyowslj1th8d9j6j3wlbwrtoe` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

Show create table appointment;

SELECT constraint_name
FROM information_schema.key_column_usage
WHERE RE

