SHOW DATABASES;

CREATE DATABASE UA_ESHOP;

#sELeCT A dB
USE UA_ESHOP;

CREATE TABLE users(
	user_id INT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(50),
    date_registered DATE
);

SHOW TABLES;


CREATE TABLE prod(
	product_id INT,
    product_name VARCHAR(100)
);

desc products;
#renaming a table
ALTER table prod RENAME to products;

-- add new column

ALTER TABLE products ADD COLUMN description VARCHAR(200), ADD price DECIMAL(10, 2), ADD stocks INT, ADD date_added DATE;

ALTER TABLE products
ADD COLUMN test VARCHAR(200);

-- RENAME A TABLE COLUMN

ALTER TABLE products 
RENAME COLUMN test TO brand;

-- Modifying Table Column

ALTER TABLE products
MODIFY COLUMN brand VARCHAR(100);

ALTER TABLE products
MODIFY COLUMN brand INT NOT NULL;

-- Deleting a column

ALTER TABLE products
DROP COLUMN brand;


-- DELETING A WHOLE TABLE

DROP TABLE products;
DROP DATABASE UA_ESHOP;
