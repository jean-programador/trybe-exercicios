let numbers = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20];
let result = 0;
for (let index = 0; index < numbers.length; index += 1)
{
   let sum = numbers[index];
   result = result + sum;
}

let media = result/numbers.length;

if (media > 20){
console.log("A média aritimética deste array é igual a:",media);
console.log("Valor maior que 20");
} else {
    console.log("A média aritimética deste array é igual a:",media);
    console.log("Valor menor ou igual á 20");
}