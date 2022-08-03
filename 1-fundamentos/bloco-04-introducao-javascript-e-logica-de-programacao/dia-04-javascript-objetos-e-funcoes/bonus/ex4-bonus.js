let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };
const firstName = moradores['blocoDois'][1]['nome'];
const lastName = moradores['blocoDois'][1]['sobrenome'];
const andar = moradores['blocoDois'][1]['andar'];
const apt = moradores['blocoDois'][1]['apartamento'];

console.log(`O morador do bloco 2 de nome ${firstName} ${lastName} mora no ${andar}° andar, apartamento ${apt}.`);

console.log('');

  for(index = 0; index < moradores['blocoUm'].length; index += 1) {
    console.log(`Moradores ${index} do Bloco 01 = ${moradores['blocoUm'][index]['nome']} ${moradores['blocoUm'][index]['sobrenome']}
    
Moradores ${index} do Bloco 02 = ${moradores['blocoDois'][index]['nome']} ${moradores['blocoDois'][index]['sobrenome']}
                 `);
  }