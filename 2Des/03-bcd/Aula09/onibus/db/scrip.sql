DROP DATABASE IF EXISTS onibus;
CREATE DATABASE onibus CHARSET=UTF8 COLLATE utf8_general_ci;
USE onibus;

CREATE TABLE Motorista(
    cpf VARCHAR(15) PRIMARY KEY NOT NULL,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE Telefone(
    cpf_motorista VARCHAR(15) NOT NULL,
    numero VARCHAR(15) NOT NULL,
    FOREIGN KEY (cpf_motorista) REFERENCES Motorista(cpf)
);

CREATE TABLE Linha(
    id VARCHAR(10) PRIMARY KEY NOT NULL,
    descricao VARCHAR(100) NOT NULL
);

CREATE TABLE Horario(
    id_linha VARCHAR(10) NOT NULL,
    hora TIME NOT NULL,
    FOREIGN KEY (id_linha) REFERENCES Linha(id)
);

CREATE TABLE Dirige(
    cpf_motorista VARCHAR(15) NOT NULL,
    id_linha VARCHAR(10) NOT NULL,
    FOREIGN KEY (cpf_motorista) REFERENCES Motorista(cpf),
    FOREIGN KEY (id_linha) REFERENCES Linha(id)
);

LOAD DATA INFILE 'C:/IgorH/Senai-2023/2Des/03-bcd/Aula09/onibus/csv/motorista.csv'
INTO TABLE Motorista
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/IgorH/Senai-2023/2Des/03-bcd/Aula09/onibus/csv/telefone.csv'
INTO TABLE Telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/IgorH/Senai-2023/2Des/03-bcd/Aula09/onibus/csv/motorista.csv'
INTO TABLE Linha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/IgorH/Senai-2023/2Des/03-bcd/Aula09/onibus/csv/horario.csv'
INTO TABLE Horario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/IgorH/Senai-2023/2Des/03-bcd/Aula09/onibus/csv/dirige.csv'
INTO TABLE Dirige
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;