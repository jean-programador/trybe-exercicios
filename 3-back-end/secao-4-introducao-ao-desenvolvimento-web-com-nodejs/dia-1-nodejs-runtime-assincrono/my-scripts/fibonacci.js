const readline = require('readline-sync');

function fibonacciSequence() {
  let sum = 0;
  let previous = 0;
  let next = 1;
  const n = readline.questionInt(
    'Digite a quantidade de elemtos da sequencia de fibonacci que deseja visualizar '
  );
  if (n === 0) {
    console.log('Numero precisa ser maior que ZERO');
  } else {
    console.log(
      `Exibindo os ${n} primeiros elementos da sequencia de fibonacci.....`
    );
    for (let index = 1; index <= n; index++) {
      if (index === 1) {
        sum = 1;
        console.log(sum);
      } else {
        sum = previous + next;
        previous = next;
        next = sum;
        console.log(sum);
      }
    }
  }
}

fibonacciSequence();
