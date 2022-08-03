// 🚀 Crie uma função que retorne um array em ordem crescente.
// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>);
// retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sort = (array) => {
  array.sort((a, b) => a - b);
  console.log(`Os números ${array} se encontram de forma crescente`);
};

sort(oddsAndEvens); // será necessário alterar essa linha 😉
