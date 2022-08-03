const { myFizzBuzz } = require('../functions/exercises');

describe('Exercício 3 - Função myFizzBuzz()', () => {

    it('Verifica se a chamada myFizzBuzz(15) retorna o resultado esperado', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    })

    it('Verifica se a chamada myFizzBuzz(3) retorna o resultado esperado', () => {
        expect(myFizzBuzz(3)).toEqual('fizz');
    })

    it('Verifica se a chamada myFizzBuzz(5) retorna o resultado esperado', () => {
        expect(myFizzBuzz(5)).toEqual('buzz');
    })

    it('Verifica se a chamada myFizzBuzz(2) retorna false', () => {
        expect(myFizzBuzz(2)).toEqual(2);
    })

    it('Verifica se a chamada myFizzBuzz("2") retorna false', () => {
        expect(myFizzBuzz("2")).toEqual(false);
    })
});