let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let secondNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
        if (index === numbers.length - 1) {
            multi = numbers[index] * 2;
            secondNumbers.push(multi);
            
    } else {
        let multi = numbers[index] * numbers[index + 1];
        secondNumbers.push(multi);
    }
  }

console.log(secondNumbers);