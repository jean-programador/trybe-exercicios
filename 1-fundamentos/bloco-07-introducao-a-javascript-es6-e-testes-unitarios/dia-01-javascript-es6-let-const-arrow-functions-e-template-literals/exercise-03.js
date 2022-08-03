// Crie uma função que receba um número e retorne seu fatorial.
// Imprima no terminal "Esse é o fatorial resultado da função" (Lembre-se de utilizar template literals nesse momento).

const fatorial = (n) => {
  for (i = n; i <= n && i >= 0; i -= 1) {
    if (n != i && i > 0) {
      n *= i;
    } else if (n === 0) {
      n = 1;
    }
  }
  const result = `Esse é o fatorial ${n}`;
  return result;
};

console.log(fatorial(4));

// Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.
const factorReduce = (number) =>
  number > 1 ? number * factorReduce(number - 1) : 1;

console.log(factorReduce(10));
