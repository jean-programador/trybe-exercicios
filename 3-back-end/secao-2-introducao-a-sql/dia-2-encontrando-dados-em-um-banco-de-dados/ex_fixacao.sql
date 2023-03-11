# Escreva uma query que selecione todas as colunas da tabela city;
SELECT * FROM sakila.city;
# Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;
SELECT first_name, last_name FROM sakila.city;
# Escreva uma query que exiba todas as colunas da tabela rental;
SELECT * FROM sakila.rental;
# Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
SELECT title, description, release_year FROM sakila.film;

# Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;

/* Na tabela sakila.film, crie uma query que exiba o título do filme e sua 
classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação.
Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis. */
SELECT CONCAT(title, ' ', rating) AS 'Classificação' FROM sakila.film; 

/* Na tabela sakila.address, monte uma query que exiba a rua e o distrito 
de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço. */
SELECT CONCAT(address, ' ', district) AS 'Endereço' FROM sakila.address;

# Quantas senhas temos cadastradas na tabela staff?
SELECT COUNT(password) FROM sakila.staff;
# Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT COUNT(first_name AND last_name) FROM sakila.staff;
# Quantos emails temos cadastrados na tabela staff?
SELECT COUNT(email) FROM sakila.staff;