drop database if exists lojinha;
create database lojinha;
use lojinha;
create table Clientes(
    id integer primary key auto_increment,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    cpf varchar(20) not null unique,
    nascimento date not null
);
describe Clientes;

-- DML - Popular com dados de teste
insert into Clientes (nome, sobrenome, cpf, nascimento) values
('Joaquim', 'Silva', '123.456.789-00', '1980-09-02'),
('Pedro', 'Santos', '987.654.321-00', '1990-01-07'),
('Maria', 'Pereira', '111.111.111-00', '2000-02-01');

select * from Clientes;