-- Active: 1669147458642@@127.0.0.1@3306@pixar
-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT mv.title, bx.domestic_sales, bx.international_sales 
FROM box_office AS bx
INNER JOIN movies AS mv
ON bx.movie_id = mv.id;

-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número 
-- maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT mv.title, (bx.domestic_sales + bx.international_sales) AS 'sales'
FROM box_office AS bx
INNER JOIN movies AS mv
ON bx.movie_id = mv.id
WHERE bx.international_sales > bx.domestic_sales;

-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT mv.title, bx.rating
FROM box_office AS bx
INNER JOIN movies AS mv
ON bx.movie_id = mv.id
ORDER BY bx.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes 
-- em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT  
    th.name,
    th.location,
    mv.title,
    mv.director,
    mv.year,
    mv.length_minutes
FROM 
  theater AS th
LEFT JOIN 
  movies AS mv ON th.id = mv.theater_id
ORDER BY 
  th.name;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e,
--  adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT  
    th.name,
    th.location,
    mv.title,
    mv.director,
    mv.year,
    mv.length_minutes
FROM 
  theater AS th
RIGHT JOIN 
  movies AS mv ON th.id = mv.theater_id
ORDER BY 
  th.name;

  -- 🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz 
  -- (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT
    mv.id,
    mv.title,
    mv.director,
    mv.year,
    mv.length_minutes,
    mv.theater_id
FROM 
  movies AS mv
INNER JOIN 
  box_office AS bx ON bx.movie_id = mv.id
WHERE
  bx.rating > 8 AND mv.theater_id IS NOT NULL;
