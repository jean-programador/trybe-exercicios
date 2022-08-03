// 🚀 Crie duas funções JavaScript com as seguintes especificações:

// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// - O nome da função deverá ser substituaX;
// - A função deverá receber um nome por parâmetro;
// - Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
// - A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// - Exemplo:
// - Parâmetro: 'Bebeto'
// - Retorno: 'Tryber Bebeto aqui!'
const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const split = frase.split(' ');
  split[1] = nome;
  return split.join(' ');
};
const result = substituaX('Bebeto');
// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// - O nome da função deverá ser minhasSkills;
// - A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
// - Declare dentro da função uma variável com o nome skills, do tipo const;
// - A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// - Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals),
//   a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
const minhasSkills = (func) => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  return `
    ${func}
    Minhas três principais habilidades são:
     - ${skills[0]}
     - ${skills[1]}
     - ${skills[2]}`;
};

console.log(minhasSkills(result));
