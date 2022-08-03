let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let newObject = {
      personagem: 'Tio Patinhas',
      origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
      nota: 'O último MacPatinhas',
      recorrente: 'Sim'
  }
//Exercício 1
  console.log('Bem vinda, '+ info.personagem);

//Exercício 2
  info.recorrente = 'Sim';
  console.log(info);

//Exercício 3
  for (let values in info) {
      console.log(values);
  }

  console.log('');

//Exercício 4  
  for (let values in info) {
    console.log(info[values]);
}

console.log('');

//Exercício 5
for (let index in info) {
    if (info[index] === newObject[index]) {
        console.log('Ambos Recorrentes');
    } else {
    console.log(info[index]+ ' e ' +newObject[index]);
    }
}