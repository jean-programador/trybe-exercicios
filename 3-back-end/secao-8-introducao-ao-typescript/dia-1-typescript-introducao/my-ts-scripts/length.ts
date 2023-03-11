const readLine = require('readline-sync');

const unitsLength = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm']

function convertLength(value: number, baseUnit: string, convertUnit: string): number {
const indexBaseUnit = unitsLength.indexOf(baseUnit);
const indexConvertUnit = unitsLength.indexOf(convertUnit);
const expoent = indexConvertUnit - indexBaseUnit;

return value * Math.pow(10, expoent);
}

(function execLength(): void {
  console.log('\nBEM VINDO AO CONVERSOR DE UNIDADE MEDIDA DE COMPRIMENTO');
  
  console.log('\n--------------------------------------------------');

  readLine.setDefaultOptions({
    limit: unitsLength,
  });
  console.log('\nOpções disponíveis: km, hm, dam, m, dm, cm, mm');
  
  const value: number = readLine.questionInt('\nDigite o valor a ser convertido: ')
  const baseUnit: string = readLine.question('\nDigite a unidade base: ');
  const convertUnit: string = readLine.question('\nDigite a unidade para que deseja converter: ');

  const result = convertLength(value, baseUnit, convertUnit)
  console.log(`\n${value}${baseUnit} é igual a ${result}${convertUnit}`);
  
})()