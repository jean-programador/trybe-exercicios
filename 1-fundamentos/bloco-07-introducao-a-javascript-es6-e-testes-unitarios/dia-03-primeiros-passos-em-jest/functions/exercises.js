function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
};

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(phrase) {
    const a = phrase.replace(/a/gi, 1);
    const e = a.replace(/e/gi, 2);
    const i = e.replace(/i/gi, 3);
    const o = i.replace(/o/gi, 4);
    const result = o.replace(/u/gi, 5);

    return result;
}


function decode(code) {
  const one = code.replace(/[1]/g, 'a');
  const two = one.replace(/[2]/g, 'e');
  const three = two.replace(/[3]/g, 'i');
  const four = three.replace(/[4]/g, 'o');
  const result = four.replace(/[5]/g, 'u');

  return result;
}

function techList(arr, string){
  let object = [];
  arr.sort();
  if (arr.length === 0) {
    return 'Vazio!';
  }
  for (let index of arr) {
    object.push({
      tech: index,
      name: string,
    });
  }
  return object;
};

const hydrate = (string) => {
  const reg = /[0-9]/g;
  const result = string.match(reg);
  let sum = 0;
  for (let value of result) {
    sum += parseInt(value);
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`

}
module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate};