let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let comp;
let numMaior = numbers[0];

for (let index = 0; index < numbers.length; index += 1)
{
    comp = numbers[index];
    if (comp >= numMaior) {
        numMaior = comp;
    }
}

console.log("O maior valor contido nesse array é:",numMaior);