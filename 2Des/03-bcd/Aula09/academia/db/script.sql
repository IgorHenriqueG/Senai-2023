DROP DATABASE IF EXISTS academia;
CREATE DATABASE academia CHARSET=UTF8 COLLATE utf8_general_ci;
USE academia;

CREATE TABLE aluno (
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nascimento DATE,
    sexo VARCHAR(2),
    peso DECIMAL(5,2)
);

CREATE TABLE telefone (
    id_aluno INT NOT NULL,
    numero VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES aluno(id) ON DELETE CASCADE
);

CREATE TABLE exercicio(
    id INT NOT NULL PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL,
    grupo_muscular VARCHAR(50) NOT NULL,
    aparelho VARCHAR(50) NOT NULL
);

CREATE TABLE ficha(
    id_aluno INT NOT NULL,
    id_exercicio INT NOT NULL,
    dia_semana DATE,
    serie INT NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES aluno(id) ON DELETE CASCADE,
    FOREIGN KEY (id_exercicio) REFERENCES exercicio(id) ON DELETE CASCADE
);

CREATE TABLE rel_exercicio(
    id_aluno INT NOT NULL,
    id_exercicio INT NOT NULL,
    descricao VARCHAR(30),
    aparelho VARCHAR(50),
    serie INT NOT NULL,
    PRIMARY KEY (id_aluno, id_exercicio),
    FOREIGN KEY (id_aluno) REFERENCES aluno(id) ON DELETE CASCADE,
    FOREIGN KEY (id_exercicio) REFERENCES exercicio(id) ON DELETE CASCADE
);

show tables;

LOAD DATA INFILE 'C:/IgorH/Senai-2023/2Des/03-bcd/Aula09/academia/csv/aluno.csv'
INTO TABLE aluno
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/IgorH/Senai-2023/2Des/03-bcd/Aula09/academia/csv/exercicio.csv'
INTO TABLE exercicio
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/IgorH/Senai-2023/2Des/03-bcd/Aula09/academia/csv/ficha.csv'
INTO TABLE ficha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/IgorH/Senai-2023/2Des/03-bcd/Aula09/academia/csv/rel_exercicio.csv'
INTO TABLE rel_exercicio
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/IgorH/Senai-2023/2Des/03-bcd/Aula09/academia/csv/telefone.csv'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;