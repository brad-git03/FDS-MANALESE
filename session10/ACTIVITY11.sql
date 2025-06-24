SHOW DATABASES;

CREATE DATABASE LAB_SHOP;

USE LAB_SHOP;

CREATE TABLE CUSTOMER(
	user_id INT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    address VARCHAR(255),
    contact_number INT,
    birthday DATE
);


CREATE TABLE PRODUCT(
	product_id INT,
    product_name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price float,
    stocks INT,
    contact_number INT,
    date_purchased date
);

CREATE TABLE DISTRIBUTOR(
	distributor_name VARCHAR(255),
    product_id INT,
    distributor_address VARCHAR(255),
    date_delivered TIMESTAMP,
    distributor_cotact INT
);

ALTER TABLE product MODIFY COLUMN date_purchased timestamp
, MODIFY COLUMN price INT;

DESC CUSTOMER;
DESC PRODUCT;
DESC DISTRIBUTOR;