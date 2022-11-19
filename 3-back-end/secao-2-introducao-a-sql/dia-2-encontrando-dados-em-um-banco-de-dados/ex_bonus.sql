-- Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
SELECT piece, price FROM PiecesProviders.Provides WHERE provider='RBT';
-- Escreva uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT * FROM PiecesProviders.Provides ORDER BY price DESC LIMIT 5;
-- Escreva uma query para exibir o nome das empresas e o preço das quatro peças com os maiores preços, começando a lista a partir do 3º item.
SELECT provider, price FROM PiecesProviders.Provides ORDER BY price DESC LIMIT 4 OFFSET 2;
-- Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordene o resultado pelos preços das peças de forma decrescente.
SELECT * FROM PiecesProviders.Provides WHERE provider='HAL' ORDER BY price DESC;
-- Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT COUNT(provider) FROM PiecesProviders.Provides WHERE piece=1;