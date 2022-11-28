-- Active: 1669147458642@@127.0.0.1@3306@sakila
-- Insira um novo funcionário na tabela sakila.staff.
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username, last_update) VALUES
('Jean', 'Carlos', 3, 2, 1, 'Jncorreia44','2022-11-24 04:56:15')

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username, last_update) VALUES
('Teste', 'Carlos', 4, 1, 1, 'teste55','2022-10-24'),
('Teste2', 'Carlos', 2, 2, 0, 'teste44','2022-12-25 05:56:15')

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer 
-- e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO actor (first_name, last_name, last_update)
SELECT first_name, last_name, last_update FROM customer LIMIT 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO category (name, last_update) VALUES
('Categoria1','2022-12-25 05:56:15'),
('Categoria2', '2022-12-25 05:56:15'),
('Categoria3', '2022-12-25 05:56:15');

-- Cadastre uma nova loja na tabela sakila.store.
INSERT INTO store (manager_staff_id, address_id, last_update) VALUES
(3, 2, '2022-12-25 05:56:15');