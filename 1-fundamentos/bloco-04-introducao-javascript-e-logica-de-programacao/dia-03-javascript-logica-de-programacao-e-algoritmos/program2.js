let word = 'banana';
let reverse = word.split('');
let result = [];

for (let index  = reverse.length -1; index < reverse.length && index >= 0; index -= 1) {
    result.push(reverse[index]);
}

let string = result.toString();
result = string.replace(/,/g, '');

console.log(result);