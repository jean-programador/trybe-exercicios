let numbers = [5, 9, 3, 19, 1, 8, 100, 2, -35, 27];
let comp;
let numMenor = numbers[0];

for (let index = 0; index < numbers.length; index += 1)
{
    comp = numbers[index];
    if (comp <= numMenor) {
        numMenor = comp;
    }
}

console.log("O menor valor contido nesse array é:",numMenor);