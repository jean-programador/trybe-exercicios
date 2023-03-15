const unitsArea = ['km²', 'hm²', 'dam²', 'm²', 'dm²	', 'cm²', 'mm²'];

function convertArea(
  value: number,
  baseUnit: string,
  convertUnit: string,
): number {
  const indexBaseUnit = unitsArea.indexOf(baseUnit);
  const indexConvertUnit = unitsArea.indexOf(convertUnit);
  const expoent = indexConvertUnit - indexBaseUnit;

  return value * Math.pow(100, expoent);
}

function execArea(): void {
  const readLine = require('readline-sync');
  
  console.log('\nBEM VINDO AO CONVERSOR DE UNIDADE MEDIDA DE ÁREA');

  console.log('\n--------------------------------------------------');

  const value: number = readLine.questionInt(
    '\nDigite o valor a ser convertido: ',
  );
 const indexBase: number = readLine.keyInSelect(
   unitsArea,
   '\nEscolha a unidade base: ',
 );
 const indexConvert: number = readLine.keyInSelect(
   unitsArea,
   '\nEscolha a unidade para que deseja converter: ',
 );

 const result = convertArea(
   value,
   unitsArea[indexBase],
   unitsArea[indexConvert],
 );
 console.log(
   `\n${value}${unitsArea[indexBase]} é igual a ${result}${unitsArea[indexConvert]}`,
 );
};

module.exports = {
  execArea,
}