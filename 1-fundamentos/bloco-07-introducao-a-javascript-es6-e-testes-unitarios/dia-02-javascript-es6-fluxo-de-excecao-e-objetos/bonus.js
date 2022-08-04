// 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  },

  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  },
};
function watchClass(obj) {
  const values = Object.values(obj);
  let counter = 0;
  for (value in values) {
    if (values[value].materia === 'Matemática') {
      counter += values[value].numeroEstudantes;
    }
  }
  return counter;
}
console.log(watchClass(allLessons));

// 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
function createReport(obj, prof) {
  const values = Object.values(obj);
  let students = 0;
  const aulas = [];
  for (value in values) {
    if (values[value].professor === prof) {
      students += values[value].numeroEstudantes;
      aulas.push(values[value].materia);
    }
  }
  return {
    professor: prof,
    aulas,
    estudantes: students,
  };
}
console.log(createReport(allLessons, 'Maria Clara'));
