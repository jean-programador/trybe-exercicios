let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (let index = 0; index < numbers.length; index += 1)
{
   let sum = numbers[index];
   result = result + sum;
}
let media = result/numbers.length;
console.log("A média aritimética deste array é igual a:",media);