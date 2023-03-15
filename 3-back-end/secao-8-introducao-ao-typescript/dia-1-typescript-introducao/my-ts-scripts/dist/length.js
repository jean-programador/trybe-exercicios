"use strict";
const unitsLength = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convertLength(value, baseUnit, convertUnit) {
    const indexBaseUnit = unitsLength.indexOf(baseUnit);
    const indexConvertUnit = unitsLength.indexOf(convertUnit);
    const expoent = indexConvertUnit - indexBaseUnit;
    return value * Math.pow(10, expoent);
}
function execLength() {
    const readLine = require('readline-sync');
    console.log('\nBEM VINDO AO CONVERSOR DE UNIDADE MEDIDA DE COMPRIMENTO');
    console.log('\n--------------------------------------------------');
    const value = readLine.questionInt('\nDigite o valor a ser convertido: ');
    const indexBase = readLine.keyInSelect(unitsLength, '\nEscolha a unidade base: ');
    const indexConvert = readLine.keyInSelect(unitsLength, '\nEscolha a unidade para que deseja converter: ');
    const result = convertLength(value, unitsLength[indexBase], unitsLength[indexConvert]);
    console.log(`\n${value}${unitsLength[indexBase]} é igual a ${result}${unitsLength[indexConvert]}`);
}
module.exports = {
    execLength,
};
