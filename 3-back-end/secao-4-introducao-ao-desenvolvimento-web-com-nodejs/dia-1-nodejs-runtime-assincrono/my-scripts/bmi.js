const readline = require('readline-sync');

const weight = readline.questionFloat("What your weight?");
const height = readline.questionFloat("What your height?");

function bmi(height, weight) {
  const heigthTotal = height ** 2;
  const bmi = weight / heigthTotal;
  return classificBmi(bmi.toFixed(2));
}

function classificBmi(bmi) {
  if ( bmi < 18.5) {
    return `${bmi}: Abaixo do peso(magreza)`
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    return `${bmi}: Peso Normal`
  }
  if (bmi >= 25 && bmi <= 29.9) {
    return `${bmi}: Acima do peso(sobrepeso)` 
  }
  if(bmi >= 30 && bmi <= 34.9) {
    return `${bmi}: Obesidade grau I`
  }
  if (bmi >= 35 && bmi <= 39.9) {
    return `${bmi}: Obesidade grau II`;
  }
  if (bmi > 40) {
    return `${bmi}: Obesidade graus III e IV`;
  }
}

console.log(bmi(height, weight))

module.exports = { bmi };
