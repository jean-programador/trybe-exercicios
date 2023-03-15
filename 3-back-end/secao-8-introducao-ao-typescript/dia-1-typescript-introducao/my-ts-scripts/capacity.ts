const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convertCapacity(
  value: number,
  baseUnit: string,
  convertUnit: string,
): number {
  const indexBaseUnit = unitsCapacity.indexOf(baseUnit);
  const indexConvertUnit = unitsCapacity.indexOf(convertUnit);
  const expoent = indexConvertUnit - indexBaseUnit;

  return value * Math.pow(10, expoent);
}

function execCapacity(): void {
  const readLine = require('readline-sync');

  console.log('\nBEM VINDO AO CONVERSOR DE UNIDADE MEDIDA DE CAPACIDADE');

  console.log('\n--------------------------------------------------');

   const value: number = readLine.questionInt(
     '\nDigite o valor a ser convertido: ',
   );
   const indexBase: number = readLine.keyInSelect(
     unitsCapacity,
     '\nEscolha a unidade base: ',
   );
   const indexConvert: number = readLine.keyInSelect(
     unitsCapacity,
     '\nEscolha a unidade para que deseja converter: ',
   );

   const result = convertCapacity(
     value,
     unitsCapacity[indexBase],
     unitsCapacity[indexConvert],
   );
   console.log(
     `\n${value}${unitsCapacity[indexBase]} é igual a ${result}${unitsCapacity[indexConvert]}`,
   );
};

module.exports = {
  execCapacity,
}