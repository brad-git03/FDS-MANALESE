CREATE DATABASE hospital;

USE hospital;

CREATE TABLE patients (
    patient_id VARCHAR(10) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
	gender VARCHAR(1) NOT NULL,
	birth_date DATE,
    city VARCHAR(32) NOT NULL,
    province_id VARCHAR(3) NOT NULL,
    allergies VARCHAR(100),
    height INT,
    weight INT
);

DESC patients;
drop table patients;

SELECT * FROM patients;

INSERT INTO patients (patient_id, first_name, last_name, gender, birth_date, city, province_id, allergies, height, weight) 
VALUES 
(1, 'Juan', 'Dela Cruz', 'M', '2001-05-10', 'Manila', 'NCR', 'pollen', 170, 65),
(2, 'Maria', 'Santos', 'F', '1995-02-22', 'Cebu City', 'CV', NULL, 160, 55),
(3, 'Pedro', 'Reyes', 'M', '1989-07-14', 'Davao City', 'DVO', 'seafood', 175, 70),
(4, 'Ana', 'Lim', 'F', '2000-01-01', 'Baguio City', 'CAR', 'dust', 150, 45),
(5, 'Carlo', 'Gomez', 'M', '1993-09-09', 'Iloilo City', 'WV', 'penicillin', 168, 62);

SELECT first_name, last_name FROM patients;

SELECT first_name, last_name, province_id 
FROM patients
WHERE province_id = 'NCR';

SELECT first_name, last_name, allergies 
FROM patients
WHERE allergies = 'pollen';

SELECT first_name, last_name, height
FROM patients
WHERE height > 160;

SELECT last_name, city, gender
FROM patients
WHERE gender = 'M';

SELECT last_name, first_name
FROM patients
ORDER BY last_name ASC;

SELECT * FROM patients;

UPDATE patients SET height = height + 2
WHERE patient_id = '3';

UPDATE patients SET city = 'Mandaue City'
WHERE city = 'Cebu City';

UPDATE patients SET province_id = 'VI'
WHERE patient_id = '5';

UPDATE patients SET weight = 50
WHERE weight < 50;

UPDATE patients SET height = height + 2
WHERE allergies IS NOT NULL;

-- DELETE

SELECT * FROM patients;
DELETE FROM patients WHERE allergies IS NULL; 

DELETE FROM patients WHERE height > 180;

DELETE FROM patients WHERE birth_date < '1990-01-01'; 