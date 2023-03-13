console.log('\nOpções disponíveis: km², hm², dam², m², dm², cm², mm²');
const options = ['comprimento', 'massa', 'area', 'capacidade', 'volume'];
readLine.setDefaultOptions = ({
  limit: options,
});

const type = readLine.question("Selecione o tipo de conversão que deseja realizar:");
console.log('\nOpções disponíveis: comprimento, massa, area, capacidade, volume');

switch (type) {
  case 'comprimento':
    execLength();
    break;
  case 'massa':
    execMass();
    break;
  case 'area':
    execArea();
    break;
  case 'capacidade':
    execCapacity();
    break;
  case 'volume':
    execVolum();
    break;
  default:
    break;
}