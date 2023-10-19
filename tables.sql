CREATE TABLE Cities (
    id INT PRIMARY KEY,
    name varchar(30) UNIQUE,
);
CREATE TABLE Shops (
    id INT PRIMARY KEY,
    name varchar(30) UNIQUE,
    city_id INT,
	FOREIGN KEY (city_id)  REFERENCES Cities(id)
);
CREATE TABLE Employes (
    id INT PRIMARY KEY,
    name varchar(30),
	lastname varchar(30),
   	SURNAME varchar(30),
    shop_id INT,
	FOREIGN KEY (shop_id)  REFERENCES Shops(id)
);
CREATE TABLE Brigades (
    id INT PRIMARY KEY,
    name varchar(30) UNIQUE,
	start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	end_time DATETIME DEFAULT CURRENT_TIMESTAMP
);