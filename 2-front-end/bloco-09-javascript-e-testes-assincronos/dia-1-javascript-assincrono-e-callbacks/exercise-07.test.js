// 7 - A função uppercase recebe um parâmetro str e uma callback. Esta função transforma as letras de uma palavra em letras maiúsculas. Escreva um teste que verifique a chamada da função uppercase. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Verifica se a função uppercase funciona corretamente', (done) => {
  uppercase('abc', (strClone) => {
    try {
      expect(strClone).toBe('ABC');
      done();
    } catch (error) {
      done(error);
    }
  });

  uppercase('trybe', (strClone) => {
    try {
      expect(strClone).toBe('TRYBE');
      done();
    } catch (error) {
      done(error);
    }
  });

  uppercase('trybe', (strClone) => {
    try {
      expect(strClone).not.toBe('trybe');
      done();
    } catch (error) {
      done(error);
    }
  });

  uppercase('trybe', (strClone) => {
    try {
      expect(strClone).toHaveLength(5);
      done();
    } catch (error) {
      done(error);
    }
  });
});
