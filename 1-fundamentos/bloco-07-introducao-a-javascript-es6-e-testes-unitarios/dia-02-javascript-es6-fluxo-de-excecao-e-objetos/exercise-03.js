const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function addKey(obj, key, value) {
  return (obj[key] = value);
}

addKey(lesson2, 'turno', 'noite');
console.log(lesson2);

console.log('-------------------------------------------------------------');
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(obj) {
  const keys = Object.keys(obj);
  return `Chaves contidas no objeto: ${keys}`;
}
console.log(listKeys(lesson1));
console.log(listKeys(lesson2));
console.log(listKeys(lesson3));

console.log('-------------------------------------------------------------');
// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
function listLength(obj) {
  const keys = Object.keys(obj);
  return `O tamnho do objeto é: ${keys.length}`;
}
console.log(listLength(lesson1));
console.log(listLength(lesson2));
console.log(listLength(lesson3));

console.log('-------------------------------------------------------------');
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValues(obj) {
  const values = Object.values(obj);
  return `Valores contidos no objeto: ${values}`;
}
console.log(listValues(lesson1));
console.log(listValues(lesson2));
console.log(listValues(lesson3));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log('-------------------------------------------------------------');
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function allStudents(obj) {
  const keys = Object.keys(obj);
  const result =
    obj[keys[0]].numeroEstudantes +
    obj[keys[1]].numeroEstudantes +
    obj[keys[2]].numeroEstudantes;
  return result;
}
console.log('-------------------------------------------------------------');
console.log(allStudents(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto.
function getValueByNumber(obj, index) {
  const keys = Object.keys(obj);
  return obj[keys[index]];
}
console.log('-------------------------------------------------------------');
console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
function verifyPair(obj, key, value) {
  const entrie = Object.entries(obj);
  for (let pair in entrie) {
    if (entrie[pair].includes(key) && entrie[pair].includes(value)) {
      return true;
    }
  }
  return false;
}
console.log('-------------------------------------------------------------');
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
