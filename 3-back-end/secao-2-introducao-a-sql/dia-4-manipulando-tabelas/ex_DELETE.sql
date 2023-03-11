-- Active: 1669147458642@@127.0.0.1@3306@sakila
-- Exclua do banco de dados o ator com o nome de “KARL”.
DELETE FROM film_actor
WHERE actor_id = 12;
DELETE FROM actor
WHERE first_name = 'KARL';

-- Exclua do banco de dados os atores com o nome de “MATTHEW”.
DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);
DELETE FROM actor
WHERE first_name = 'MATTHEW'

-- Exclua da tabela film_text todos os registros que possuem a palavra “saga” em suas descrições.
DELETE FROM film_text
WHERE description LIKE '%saga%'

-- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
TRUNCATE film_actor;
TRUNCATE film_category;

-- Exclua o banco de dados e o recrie (use as instruções no início desta aula).
DROP DATABASE sakila;