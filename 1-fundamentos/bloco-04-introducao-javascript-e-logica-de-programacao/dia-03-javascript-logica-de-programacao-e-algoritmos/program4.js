let cousinNumbers = [];
for (let numero = 2; numero <= 50; numero += 1) {
    ehPrimo = true;
    for (let divisor = 2; divisor < numero; divisor += 1) {
        if (numero % divisor === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo === true) {
        cousinNumbers.push(numero);
    }
}

let numberTwo = cousinNumbers[0];
let numberOne;

for (let index = 0; index < cousinNumbers.length; index += 1) {
    numberOne = cousinNumbers[index];
    if (numberOne >= numberTwo) {
        numberTwo = numberOne;
    }
}

console.log(numberTwo);
