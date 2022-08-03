//Exercício 1
function isPalindromo(string) {
    let word = string.split('');
    let word2 = word.reverse();
    let revertedWord = word2.join('');
    if (revertedWord === string) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindromo('desenvolvimento'));

//Exercício 2
function highestNumber(array) {
    let number = 0;
    for (let index in array) {
        if (array[index] >= number) {
            number = array[index];
            best = index
        }
    }
    return best;
}
console.log(highestNumber([50, 400, 600, 7, 10, 0, -3]));

//Exercício 3
function lowNumber(array) {
    let number = 0;
    for (let index in array) {
        if (array[index] <= number) {
            number = array[index];
            low = index
        }
    }
    return low;
}
console.log(lowNumber([50, 400, 600, 7, 10, 0, 3]));

//Exercício 4
function highestWord(words) {
    let maxWord;
    let wordTwo = words[0].length;
    for (let index in words) {
        let wordOne = words[index].length;
        if (wordOne >= wordTwo) {
            wordTwo = wordOne;
            maxWord = words[index];
        }
    }
    return maxWord
}
console.log(highestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//Exercício 5
function maxRepeat(numbers) {
    numbers.sort();
    let current = null;
    let count = 0;
    let comparNumber = 0;
    let number;
    for (let index in numbers) {
        if (count > comparNumber) {
            comparNumber = count;
            number = current;
        }
        if (numbers[index] != current) {
            current = numbers[index];
            count = 1;
        } else {
            count += 1;
        }
    }
    return number;
}
console.log(maxRepeat([2, 3, 3, 3, 3, 2, 3,10,10,10,10,1,10,10,10,10,10,10,10,10,1,101,010,10]));

//Exercício 6
function sum(N) {
    let result = 0;
    for (let index = 1; index <= N; index += 1) {
        result += index;
    }
    return result;
}
console.log(sum(5));

//Exercício 7
function verificaFimPalavra(init, ending) {
    let first = init.split('');
    let final = ending.split('');
    let result;
    if (first.length > final.length) {
    if (first[first.length - 2] + first[first.length -1] === final[final.length - 2] + final[final.length - 1]) {
        result = true;
    } else {
        result = false;
    }
}
    return result;
}
console.log(verificaFimPalavra('trybe', 'be'));