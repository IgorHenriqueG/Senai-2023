-- DDL - Estrutura
drop database if exists beatify;
create database beatify;
use beatify;
create table Musics(
    id integer primary key auto_increment,
    artist varchar(255) not null,
    title varchar(255) not null,
    album varchar(255) not null,
    image varchar(255),
    url varchar(255),
    duration varchar(255)
);
describe Musics;

-- DML - Popular com dados de teste
insert into Musics(artist, title, album, image, url, duration)
values
("iamjakehill", "Waiting to Die", "Waiting to Die", "https://i1.sndcdn.com/artworks-IJB2ULJiiXtylvgR-Lae6dg-t500x500.jpg", "https://www.youtube.com/watch?v=oXThKMFjZ9I", "2:24"),
("Mounika", "Cut My Hair", "Cut My Hair", "https://i.ytimg.com/vi/rqfDjmAkq7U/maxresdefault.jpg", "https://www.youtube.com/watch?app=desktop&v=rqfDjmAkq7U", "2:07"),
("Eminem", "Not Afraid", "Recovery", "https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Eminem_-_Not_Afraid.jpg/220px-Eminem_-_Not_Afraid.jpg", "https://www.youtube.com/watch?v=5qap5aO4i9", "4:00"),
("Eminem", "Without Me", "Curtain", "https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Eminem_-_Not_Afraid.jpg/220px-Eminem_-_Not_Afraid.jpg", "https://www.youtube.com/watch?v=5qap5aO4i9", "3:50");



select * from Musics;