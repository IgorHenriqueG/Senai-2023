-- Exclui um banco de dados se ele existir (DEV).
drop database if exists lojinha;

-- Cria um novo banco de dados.
create database lojinha;
use lojinha;

-- Cria uma tabela (DEV).
create table Clientes(
    id integer primary key not null auto_increment, -- Chave primária auto-incrementada e não nula.
    cpf varchar(20) not null unique, -- Chave única e não nula e única.
    nome varchar(50) not null, -- Não nula.
    sobrenome varchar(50) not null, -- Não nula.
    nascimento date not null -- Não nula.
);

-- Comando para mostrar a estrutura da tabela.
describe Clientes;

-- Comando para mostrar todas as tabelas do banco de dados.
show tables;

-- Comando para excluir uma tabela do banco de dados.
drop table Clientes;