const readline = require('readline-sync');

const heigth = readline.questionInt("What your weight?");
const weight = readline.questionInt("What your height?");

function bmi(heigth, weight) {
return weight / (heigth * 2)
}

const result = bmi(heigth,weight)

module.exports = { bmi };
