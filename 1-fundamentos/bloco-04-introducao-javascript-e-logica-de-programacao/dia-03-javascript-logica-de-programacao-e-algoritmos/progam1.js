let n = 10;
let numbers = [];
for ( i = n -1; i < n && i > 0; i -= 1){
    numbers.push(i);
}

let length = numbers.length;

for (let index = 0; index < length; index += 1) {
    if (numbers[index] === n - 1) {
        let multi = numbers[index] * n;
        numbers.splice(index, 1, multi);
    } else {
        let result = numbers[index - index] * numbers[index - (index -1)];
        numbers.splice(index - (index -1),1, result)
        numbers.shift(); 
        length = numbers.length + index;
    }
}

  console.log(+n+"! =",numbers[0])