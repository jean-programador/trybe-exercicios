const { searchEmployee } = require("../functions/bonus");

describe('Testa se a função searchEmployee tem o comportamento esperado', () => {
    it('Testa se searchEmployee é uma função', () => {
        expect(typeof searchEmployee).toEqual('function');
    });

    it('Testa se searchEmployee retorna um erro ao receber um ID não identificado', () => {
      expect( () => { searchEmployee('125688-4', 'firstName') } ).toThrowError('ID não identificada.');
    });

    it('Testa se searchEmployee retorna um erro ao receber um informação que não existe', () => {
        expect( () => { searchEmployee('1256-4', 'adress') } ).toThrowError('Informação indisponível');
      });

    it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
        expect(() => { searchEmployee() }).toThrow();
      });

      it('Testa se searchEmployee retorna o resultado esperado quando passado as informações corretas', () => {
        expect(searchEmployee('1256-4', 'firstName')).toEqual('Linda');
        expect(searchEmployee('4456-4', 'lastName')).toEqual('Zuckerberg');
        expect(searchEmployee('5569-4', 'specialities')).toEqual(['Frontend', 'Redux', 'React', 'CSS']);
        expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana');
        expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
      });
})