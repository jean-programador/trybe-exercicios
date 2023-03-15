# Trybe Exercícos - Módulo de Backend

>  **Seção 8 - Introdução a TypeScript**  
>  **Dia 1 - Introdução ao TypeScript**
> 

## Exercício 1

Temos uma API que começou a ter diversos erros e apresentar bugs frequentes. Como solução, o CTO do time, avaliou que utilizar o Typescript em suas funções, diminuiria um pouco desses problemas.

Para isso você foi direcionado a modificar as funções abaixo, escritas em Javascript, para que fossem tipadas e executassem sem erros no compilador de Typescript:

**Observação:**  Não é necessário alterar o valor dos parâmetros passados.

**Dica:**  utilize o  [Typescript playground](https://www.typescriptlang.org/play?#code/Q)  para testar o comportamento de cada função.

### Função 1

```typescript
1
2 const numberInput = 7;
3
4 const isItAPrime = (param) => {
5  for (let i = 2; i < param; i++)
6    if (param % i === 0) {
7      return false;
8    }
9  return param > 1;
10 };
11
12 isItAPrime(numberInput)
13  ? console.log(`${numberInput} é primo`)
14  : console.log(`${numberInput} não é primo`);
```

### Função 2

```typescript
1 // Essa função é responsável por validar se o formato do e-mail está correto.
2
3 const emailInput = 'email@email.com';
4
5 const validateEmailFormat = (param) => {
6  var re = /\S+@\S+\.\S+/;
7  return re.test(param);
8};
9
10 console.log(validateEmailFormat(emailInput))
```

### Função 3

```typescript
1 // Essa função recebe uma lista e ordena seu conteúdo de forma crescente.
2
3 const numberList = [10, 5, 18, 2, 8, 23];
4
5 const sortInput = (param) => {
6  return param.sort(function(a, b){return a-b});
7 };
8
9 console.log(sortInput(numberList));
```

### Função 4

```typescript
1 // Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.
2 const peopleInput = {
3  name: 'Rui',
4  age: 23,
5 };
6
7 const createSimpleSentence = (param) => {
8  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
9 }
10
11 console.log(createSimpleSentence(peopleInput));
```

### Função 5

**Dica:**  essa função poderá receber um parâmetro com dois tipos diferentes.

```typescript
1 // Essa é uma função que verifica se a idade passada é maior ou menor   de 18 anos.
2 const ageInput = 15;
3
4 const isOfLegalAge = (param) => {
5  return !!param
6 }
7
8 ageInput >= 18
9  ? console.log(isOfLegalAge('true'))
10  : console.log(isOfLegalAge(false));
11
```

## Exercício 2

Crie um script para converter unidades de medida de comprimento:

1.  Esse script deverá se chamar  `length.ts`;
2.  Ele deverá possuir uma função chamada  `convert`  que recebe como parâmetro:
    -   valor - number
    -   unidade base - string
    -   unidade para a conversão - string

**Tabela de conversão:**

| Nome | Símbolo | Valor | 
|--|--|--|
| Quilômetro| km | 1000m
| Hectômetro| hm | 100m
| Decâmetro| dam | 10m
| Metro| m | 1m
| Decímetro| dm | 0,1m
| Centímetro| cm | 0,01m
| Milímetro| mm | 0,001m

## Exercício 3

Crie um script para converter unidades de medida de massa:

1.  Esse script deverá se chamar  `mass.ts`;
2.  Ele deverá possuir uma função chamada  `convert`  que recebe como parâmetro:
    -   valor - number
    -   unidade base - string
    -   unidade para a conversão - string

**Tabela de conversão:**

| Nome | Símbolo | Valor | 
|--|--|--|
| Quilograma| kg | 1000g
| Hectograma| hg | 100g
| Decagrama| dag | 10g
| Grama| g | 1g
| Decigrama| dg | 0,1g
| Centigrama| cg | 0,01g
| Miligrama| mg | 0,001g

## Exercício 4

Crie um script para converter unidades de medida de capacidade:

1.  Esse script deverá se chamar  `capacity.ts`;
2.  Ele deverá possuir uma função chamada  `convert`  que recebe como parâmetro:
    -   valor - number
    -   unidade base - string
    -   unidade para a conversão - string

**Tabela de conversão:**

| Nome | Símbolo | Valor | 
|--|--|--|
| Quilolitro | kl | 1000l
| Hectolitro| hl | 100l
| Decalitro| dal | 10l
| Litro| l | 1l
| Decilitro| dl | 0,1l
| Centilitro | cl | 0,01l
| Mililitro | ml | 0,001l

## Exercício 5

Crie um script para converter unidades de medida de área:

1.  Esse script deverá se chamar  `area.ts`;
2.  Ele script deverá possuir uma função chamada  `convert`  que recebe como parâmetro:
    -   valor - number
    -   unidade base - string
    -   unidade para a conversão - string

**Obs:**  atente-se à conversão de metros quadrados, que deve ser realizada de 100 em 100.

**Tabela de conversão:**

| Nome | Símbolo | Valor | 
|--|--|--|
| Quilômetro quadrado| km² | 10⁶ m²
| Hectômetro quadrado| hm² | 10⁴ m²
| Decâmetro quadrado| dam² | 10² m²
| Metro quadrado| m² | 1m²
| Decímetro quadrado| dm² | 10⁻² m²
| Centímetro quadrado| cm² | 10⁻⁴ m²
| Milímetro quadrado| mm² | 10⁻⁶ m²

## Exercício 6

Crie um script para converter unidades de medida de volume:

1.  Esse script deverá se chamar  `volume.ts`;
2.  Ele deverá possuir uma função chamada  `convert`  que recebe como parâmetro:
    -   valor - number
    -   unidade base - string
    -   unidade para a conversão - string

**Obs:**  atente-se à conversão de metros cúbicos, que deve ser realizada de 1000 em 1000.

**Tabela de conversão:**
| Nome | Símbolo | Valor | 
|--|--|--|
| Quilômetro cúbico | km³ | 10⁹ m³
| Hectômetro cúbico | hm³ | 10⁶ m³
| Decâmetro cúbico | dam³ | 10³ m³
| Metro cúbico | m³ | 1m³
| Decímetro cúbico |dm³ | 10⁻³ m³
| Centímetro cúbico | cm³ | 10⁻⁶ m³
| Milímetro cúbico | mm³ | 10⁻⁹ m³

## Exercício 7

Vamos tornar nossos scripts de unidades de medida mais interativos! Vamos adicionar input de quem usa o script. Para isso, utilize o pacote  `readline-sync`, 

Em cada script, crie uma função chamada  `exec`  que:

1.  Capta as entradas da pessoa usuária via terminal;
2.  Chama a função de conversão passando as entradas da pessoa usuária como parâmetro;
3.  Exibe uma mensagem com o resultado. Ex: “1km é igual a 1000m.”;
4.  Não se esqueça de chamar a função  `exec();`  ao final do script.

## Exercício 8

Crie um arquivo  `index.ts`  que pergunta qual conversão a pessoa usuária deseja realizar, e chama o script correspondente:

1.  O script deve ser acionado por meio do comando  `npm start`  no  `package.json`;
2.  Utilize o  `readline-sync`  para realizar o input de dados;
3.  Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis;
4.  Você pode utilizar o  `require`  para executar o script em questão.

## Exercício Bônus

Temos um array  `characters`  que agrupa dados de jogadores em um MMORPG (“Jogo de representação de papéis online, multijogador em massa”) usado para manter o registro de uma guilda (grupo de jogadores) no acompanhamento da evolução do grupo. Esses dados foram adicionados sem se atentar para sua correta tipagem, o que pode ocasionar um bug no futuro. Faça a correta tipagem do array por meio do tipo  `Character`  e da função usada para imprimir as informações básicas de todos os jogadores.


```typescript
1 type Character = any;
2
3 const characters: any = [
4  {
5    nickname: 'xKillerx',
6    class: 'warrior',
7    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
8    createdAt: new Date('2003-10-1'),
9  },
10  {
11    nickname: 'jainaProud',
12    class: 'mage',
13    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
14    createdAt: new Date('2003-10-2'),
15  },
16  {
17    nickname: 'catIn',
18    class: 'hunter',
19    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
20    createdAt: new Date('2003-10-15'),
21  },
22];
23
24 function printCharacter(character: any, index: number) {
25  const { nickname, class: cls, createdAt } = character;
26
27  console.log(`\n\n===== Character: ${index + 1} ========`);
28  console.log(`nickname: ${nickname}
29 class: ${cls}
30 createdAt: ${createdAt}`);
31 }
32
33 characters.forEach(printCharacter);
```
