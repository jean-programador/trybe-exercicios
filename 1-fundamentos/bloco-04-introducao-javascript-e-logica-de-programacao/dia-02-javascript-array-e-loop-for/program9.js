let numbers = [];
let dois = [];
for (let index = 1; index <= 25; index +=1) {
    numbers.push(index); 
}

for (div = 0; div < numbers.length; div +=1){
    dois.push(numbers[div]/2);
}

console.log(dois);