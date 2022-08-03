# DIA 4.4 - Objetos e Funções - Exercicíos bônus

A seguir estão os exercicíos **bônus** realizados no quarto dia do bloco 4 (Introdução à JavaScript e Lógica de Programação) do curso da Trybe.

#### 1. (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
  * Dicas:
    * Uma string é um array de caracteres, então cada elemento do array é uma letra;
    * Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
    * Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9;

#### 2. Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
    let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

#### 3. A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função. Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: **x Melancias, x Abacates...**
    const basket = ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja','Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia','Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva','Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva','Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia','Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana','Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca','Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana','Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva','Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja','Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca','Banana', 'Pera', 'Abacate', 'Uva',];
  
#### 4. Usando o objeto abaixo, faça os exercícios a seguir:
    let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
    };
  * Acesse as chaves **nome**, **sobrenome**, **andar** e **apartamento** do último morador do **blocoDois** e faça um **console.log** no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101";
  * Utilize o **for** para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves **nome** e **sobrenome**, depois faça o mesmo para os moradores do bloco 2;
