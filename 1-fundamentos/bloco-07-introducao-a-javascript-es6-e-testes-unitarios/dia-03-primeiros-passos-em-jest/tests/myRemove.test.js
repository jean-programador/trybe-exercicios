const { myRemove } = require('../functions/exercises');

describe('Exercício 2 - Função myRemove()', () => {

    it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })

    it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) NÃO retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })

    it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
});