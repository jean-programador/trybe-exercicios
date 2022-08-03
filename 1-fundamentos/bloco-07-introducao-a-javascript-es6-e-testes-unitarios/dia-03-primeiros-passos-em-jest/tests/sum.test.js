const { sum } = require('../functions/exercises');

describe('Exercício 1 - Função sum()', () => {

    it('Testa se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toEqual(9);
    })

    it('Testa se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toEqual(0);
    })

    it('Testa se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
        expect(() => { sum(4, "5") }).toThrow();
    })

    it('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
        expect(() => { sum(4, "5") }).toThrowError("parameters must be numbers");
    })

})