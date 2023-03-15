const unitsMass = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg']

function convertMass(value: number, baseUnit: string, convertUnit: string): number {
  const indexBaseUnit = unitsMass.indexOf(baseUnit);
  const indexConvertUnit = unitsMass.indexOf(convertUnit);
  const expoent = indexConvertUnit - indexBaseUnit;

  return value * Math.pow(10, expoent)
}

function execMass(): void {
  const readLine = require('readline-sync');

  console.log('\nBEM VINDO AO CONVERSOR DE UNIDADE MEDIDA DE MASSA');

  console.log('\n--------------------------------------------------');

    const value: number = readLine.questionInt(
      '\nDigite o valor a ser convertido: ',
    );
    const indexBase: number = readLine.keyInSelect(
      unitsMass,
      '\nEscolha a unidade base: ',
    );
    const indexConvert: number = readLine.keyInSelect(
      unitsMass,
      '\nEscolha a unidade para que deseja converter: ',
    );

    const result = convertMass(
      value,
      unitsMass[indexBase],
      unitsMass[indexConvert],
    );
    console.log(
      `\n${value}${unitsMass[indexBase]} é igual a ${result}${unitsMass[indexConvert]}`,
    );
};

module.exports = {
  execMass,
}