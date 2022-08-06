// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.
// OBS: Lembre-se de exportar o arquivo do exercício 08 para que possamos utilizá-lo em nossos testes.

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercise-08');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    expect(
      getPokemonDetails('pikachu', (error, message) => {
        try {
          expect(message).toBeNull();
          expect(error.message).toBe('Não temos esse pokémon para você :(');
          expect(error).toEqual(
            new Error('Não temos esse pokémon para você :(')
          );
          done();
        } catch (error) {
          done(error);
        }
      })
    );
  });

  it('retorna um pokémon que existe no banco de dados', () => {
    expect(
      getPokemonDetails('Bulbasaur', (error, message) => {
        try {
          expect(message).toBe(
            'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grama e a habilidade principal dele é Raio Solar'
          );
          expect(error).toBeNull();
          done();
        } catch (error) {
          done(error);
        }
      })
    );

    expect(
      getPokemonDetails('Charmander', (error, message) => {
        try {
          expect(message).toBe(
            'Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Lança Chamas'
          );
          expect(error).toBeNull();
          done();
        } catch (error) {
          done(error);
        }
      })
    );

    expect(
      getPokemonDetails('Squirtle', (error, message) => {
        try {
          expect(message).toBe(
            'Olá, seu pokémon é o Squirtle, o tipo dele é Água e a habilidade principal dele é Jato de Água'
          );
          expect(error).toBeNull();
          done();
        } catch (error) {
          done(error);
        }
      })
    );
  });
});
