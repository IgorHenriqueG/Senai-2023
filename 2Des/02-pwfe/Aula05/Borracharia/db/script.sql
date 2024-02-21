DROP DATABASE IF EXISTS db;
CREATE DATABASE db;
USE db;

CREATE TABLE Products(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    supplier_id INT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Products(name, description, price, supplier_id) VALUES
('Product 1', 'Description 1', 10.00, 1),
('Product 2', 'Description 2', 20.00, 2),
('Product 3', 'Description 3', 30.00, 3);

CREATE TABLE Suppliers(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Suppliers(name) VALUES
('Supplier 1'),
('Supplier 2'),
('Supplier 3');

CREATE TABLE Clients(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Clients(name) VALUES
('Client 1'),
('Client 2'),
('Client 3');


SELECT * FROM Products;
SELECT * FROM Suppliers;
SELECT * FROM Clients;