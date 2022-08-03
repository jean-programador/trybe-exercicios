//Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
const phrase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const biggestWord = (string) => {
  const arr = string.split(' ');
  let biggest;
  for (word of arr) {
    let index = 0;
    biggest = word.length > arr[index].length ? word : arr[index];
    index += 1;
  }
  return biggest;
};

console.log(`Sem o sort: ${biggestWord(phrase)}`);

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().
const biggestWordSort = (string) => {
  const arr = string.split(' ');
  arr.sort((a, b) => b.length - a.length);
  return arr[0];
};

console.log(`Com o sort: ${biggestWordSort(phrase)}`);
