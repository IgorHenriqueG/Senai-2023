DROP DATABASE IF EXISTS transportadora;
CREATE DATABASE transportadora CHARSET=UTF8 COLLATE utf8_general_ci;
USE transportadora;

CREATE TABLE Clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(255)
);

CREATE TABLE Funcionarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cargo VARCHAR(50),
    salario DECIMAL(10,2)
);

CREATE TABLE Veiculos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(10) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    capacidade INT NOT NULL
);

CREATE TABLE Rotas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    origem VARCHAR(255) NOT NULL,
    destino VARCHAR(255) NOT NULL,
    distancia DECIMAL(10,2)
);

CREATE TABLE Entregas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    funcionario_id INT NOT NULL,
    veiculo_id INT NOT NULL,
    rota_id INT NOT NULL,
    status VARCHAR(50),
    inicio DATETIME,
    fim DATETIME,
    FOREIGN KEY (funcionario_id) REFERENCES Funcionarios(id),
    FOREIGN KEY (veiculo_id) REFERENCES Veiculos(id),
    FOREIGN KEY (rota_id) REFERENCES Rotas(id)
);

CREATE TABLE Pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT NOT NULL,
    entrega_id INT NOT NULL,
    data DATETIME NOT NULL,
    valor DECIMAL(10,2),
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id),
    FOREIGN KEY (entrega_id) REFERENCES Entregas(id)
);

INSERT INTO Clientes(nome, email, telefone, endereco) VALUES
('João da Silva', 'IY1oF@example.com', '123456789', 'Rua das Flores, 123'),
('Maria Souza', '1t1Tn@example.com', '987654321', 'Avenida Principal, 456'),
('Pedro Almeida', '5NjZD@example.com', '456789123', 'Praça da República, 789');

INSERT INTO Funcionarios(nome, cargo, salario) VALUES
('João da Silva', 'Motorista', 2500.00),
('Maria Souza', 'Entregador', 2000.00),
('Pedro Almeida', 'Gerente', 3000.00);

INSERT INTO Veiculos(placa, modelo, capacidade) VALUES
('ABC1234', 'Fiat Palio', 5),
('DEF5678', 'Chevrolet Cruze', 4),
('GHI9012', 'Renault Duster', 3);

INSERT INTO Rotas(origem, destino, distancia) VALUES
('São Paulo', 'Rio de Janeiro', 50.00),
('Rio de Janeiro', 'Salvador', 40.00),
('Salvador', 'Fortaleza', 60.00),
('Fortaleza', 'Brasília', 30.00),
('Brasília', 'Recife', 20.00);

INSERT INTO Entregas(funcionario_id, veiculo_id, rota_id, status, inicio, fim) VALUES
(1, 1, 1, 'Entregue', '2022-01-01 10:00:00', '2022-01-01 12:00:00'),
(2, 2, 2, 'Entregue', '2022-01-02 14:00:00', '2022-01-02 16:00:00'),
(3, 3, 3, 'Entregue', '2022-01-03 08:00:00', '2022-01-03 10:00:00'),
(1, 1, 1, 'Entregue', '2022-01-04 10:00:00', '2022-01-04 12:00:00'),
(2, 2, 2, 'Entregue', '2022-01-05 14:00:00', '2022-01-05 16:00:00'),
(3, 3, 3, 'Entregue', '2022-01-06 08:00:00', '2022-01-06 10:00:00'),
(1, 1, 1, 'Entregue', '2022-01-07 10:00:00', '2022-01-07 12:00:00'),
(2, 2, 2, 'Entregue', '2022-01-08 14:00:00', '2022-01-08 16:00:00'),
(3, 3, 3, 'Entregue', '2022-01-09 08:00:00', '2022-01-09 10:00:00'),
(1, 1, 1, 'Entregue', '2022-01-10 10:00:00', '2022-01-10 12:00:00');

INSERT INTO Pedidos(cliente_id, entrega_id, data, valor) VALUES
(1, 1, '2022-01-01', 50.00),
(2, 2, '2022-01-02', 40.00),
(3, 3, '2022-01-03', 60.00),
(1, 4, '2022-01-04', 30.00),
(2, 5, '2022-01-05', 20.00),
(3, 6, '2022-01-06', 70.00),
(1, 7, '2022-01-07', 40.00),
(2, 8, '2022-01-08', 50.00),
(3, 9, '2022-01-09', 60.00),
(1, 10, '2022-01-10', 70.00),
(2, 11, '2022-01-11', 80.00),
(3, 12, '2022-01-12', 90.00),
(1, 13, '2022-01-13', 100.00),
(2, 14, '2022-01-14', 110.00),
(3, 15, '2022-01-15', 120.00),
(1, 16, '2022-01-16', 130.00),
(2, 17, '2022-01-17', 140.00),
(3, 18, '2022-01-18', 150.00),
(1, 19, '2022-01-19', 160.00),
(2, 20, '2022-01-20', 170.00);


SELECT * FROM Clientes;
SELECT * FROM Funcionarios;
SELECT * FROM Veiculos;
SELECT * FROM Rotas;
SELECT * FROM Entregas;
SELECT * FROM Pedidos;

show tables;