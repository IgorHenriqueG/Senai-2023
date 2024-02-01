-- DDL - Estrutura
drop database if exists beatify;
create database beatify;
use beatify;
create table Musics(
    id integer primary key auto_increment,
    artist varchar(255) not null,
    title varchar(255) not null,
    cover varchar(255),
    url varchar(255),
    duration varchar(255) not null
);
describe Musics;

-- DML - Popular com dados de teste
insert into Musics(artist, title, cover, url, duration)
values
("iamjakehill", "Waiting to Die", "https://i1.sndcdn.com/artworks-IJB2ULJiiXtylvgR-Lae6dg-t500x500.jpg", "https://www.youtube.com/watch?v=oXThKMFjZ9I", "2:24"),
("Mounika", "Cut My Hair", "https://i.ytimg.com/vi/rqfDjmAkq7U/maxresdefault.jpg", "https://www.youtube.com/watch?app=desktop&v=rqfDjmAkq7U", "2:07"),
("Yonlu", "Mecânica Celeste Aplicada", "https://i.scdn.co/image/ab67616d0000b273c7f6fbfb96fcf3353c5d1bde", "https://www.youtube.com/watch?app=desktop&v=rqfDjmAkq7U", "3:32"),
("Ween", "Ocean Man", "https://i.scdn.co/image/ab67616d0000b27335010b7368af2e4968d46f22", "https://www.youtube.com/watch?v=5qap5aO4i9", "2:06"),
("David Kushner", "Daylight", "https://i.scdn.co/image/ab67616d0000b27395ca6a9b4083a86c149934ae", "https://www.youtube.com/watch?app=desktop&v=rqfDjmAkq7U", "3:32");



-- select * from Musics;