let words = ['java', 'javascript', 'python', 'html', 'css'];
let wordOne;
let wordTwo = words[0].length;
let highestWord;

for (let index = 0; index < words.length; index += 1)
{
    wordOne = words[index].length;
    if (wordOne <= wordTwo) {
        wordTwo = wordOne;
        highestWord = words[index];
    }
}

console.log(highestWord);