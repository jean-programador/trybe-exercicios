// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...args) => {
    return args.reduce((acc, curr) => acc + curr);
}

console.log(sum(5,2,8,9,10,2));