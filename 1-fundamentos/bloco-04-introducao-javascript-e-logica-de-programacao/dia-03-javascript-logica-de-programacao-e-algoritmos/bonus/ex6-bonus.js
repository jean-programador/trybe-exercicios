const number = 7;
let divisor = 0;

for (index = 0; index <= number; index += 1) {
    if (number % index === 0){
        divisor +=1;
    }
}
if (divisor === 2) {
    console.log(`${number} é um número Primo`);
} else {
    console.log(`${number} NÃO é um número Primo`);
}