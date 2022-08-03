const { encode, decode } = require('../functions/exercises');

describe('Exercício 4 - Função encode()', () => {
    it('Testa de encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });

    it('Testa se as vogais a,e,i,o,u são convertidas em 1,2,3,4,5 respectivamente', () => {
        expect(encode('a,e,i,o,u')).toEqual('1,2,3,4,5');
    })

    it('Testa se as consoantes b,c,d,f,g não são alteradas', () => {
        expect(encode('b,c,d,f,g')).toEqual('b,c,d,f,g');
    })

    it('Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        const string = 'How are you today?';
        expect(encode(string)).toHaveLength(18);
    })
})

describe('Exercício 4 - Função decode()', () => {
    it('Testa de decode é uma função', () => {
        expect(typeof decode).toEqual('function');
    });

    it('Testa se os números 1,2,3,4,5 são convertidos em a,e,i,o,u respectivamente', () => {
        expect(decode('1,2,3,4,5')).toEqual('a,e,i,o,u');
    })

    it('Testa se os números 6,7,8,9 não são alterados', () => {
        expect(decode('6,7,8,9')).toEqual('6,7,8,9');
    })

    it('Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        const string = 'H4w 1r2 y45 t4d1y?';
        expect(encode(string)).toHaveLength(18);
    })
})