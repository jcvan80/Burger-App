drop database if exists burgers_db;

create database burgers_db;
USE burgers_db;

create table burgers
(
    id int not null AUTO_INCREMENT,
    name varchar (100) not null,
    devoured boolean not null,
    primary key (id)
);