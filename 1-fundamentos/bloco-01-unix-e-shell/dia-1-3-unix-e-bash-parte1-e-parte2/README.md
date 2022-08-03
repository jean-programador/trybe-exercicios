## Exercícios Unix e Bash - Parte I - Criação de arquivos e diretórios
<p>Primeiros exercícios realizados no curso da Trybe, nas primeiras aulas aprendemos a utilizar o terminal dos SO baseados no sistema Unix, nesta primeira parte de exercícios trabalhamos criando, renomeando,copiando,movendo e removendo arquivos e diretórios através do terminal. Os exercícios realizados neste primeiro dia, foram os seguintes:</p>

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.
2. Crie um arquivo de texto com o nome **trybe.txt**.
3. Crie uma cópia do arquivo **trybe.txt** com nome **trybe_backup.txt**.
4. Renomeie o arquivo **trybe.txt**.
5. Dentro de **unix_tests**, crie um novo diretório chamado **backup**.
6. Mova o arquivo **trybe_backup.txt** para o diretório **backup**.
7. Dentro de **unix_tests**, crie um novo diretório chamado **backup2**.
8. Mova o arquivo **trybe_backup.txt** da pasta **backup** para a pasta **backup2**.
9. Apague a pasta **backup**.
10. Renomeie a pasta **backup2** para **backup**.
11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
12. Apague o diretório **backup**.
13. Limpe o terminal. <br>
- Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto, chamado **skills.txt**, com o seguinte conteúdo:
  * Internet
  * Unix
  * Bash
  * HTML
  * CSS
  * JavaScript
  * React
  * SQL
14. Mostre na tela as 5 primeiras skills do arquivo **skills.txt**.
15. Mostre na tela as 4 últimas skills do arquivo **skills.txt**.
16. Apague todos os arquivos que terminem em **.txt**.

## Exercícios Unix e Bash - Parte II - Manipulação & Busca
<p>Nesta segunda parte de exercícios trabalhamos com a manipulação e busca de conteúdo específico dentro de um arquivo, através do terminal. Os exercícios realizados na segunda parte do dia, foram os seguintes:</p>
1. Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
       
       curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
2. Mostre todo o conteúdo do arquivo **countries.txt** na tela.
3. Mostre o conteúdo de **countries.txt**, página por página, até encontrar a **Zambia**.
4. Mostre novamente o conteúdo de **countries.txt** página por página, mas agora utilize um comando para buscar por **Zambia**.
5. Busque por **Brazil** no **countries.txt**.
6. Busque novamente por **brazil**, mas agora utilizando o *lower case*.
 * **Para os próximos exercícios, crie um novo arquivo chamado** *phrases.txt* **e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal**.
7. Busque pelas frases que não contenham a palavra **fox**.
8. Conte o número de palavras do arquivo **phrases.txt**.
9. Conte o número de linhas do arquivo **phrases.txt**.
10. Crie os arquivos **empty.tbt** e **empty.pdf**.
11. Liste todos os arquivos do diretório **unix_tests**.
12. Liste todos os arquivos que terminem com **txt**.
13. Liste todos os arquivos que terminem com **tbt** ou **txt**.
14. Acesse o manual do comando ls.
