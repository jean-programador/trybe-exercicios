"use strict";
const unitsVolum = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function convertVolum(value, baseUnit, convertUnit) {
    const indexBaseUnit = unitsVolum.indexOf(baseUnit);
    const indexConvertUnit = unitsVolum.indexOf(convertUnit);
    const expoent = indexConvertUnit - indexBaseUnit;
    return value * Math.pow(1000, expoent);
}
function execVolum() {
    const readLine = require('readline-sync');
    console.log('\nBEM VINDO AO CONVERSOR DE UNIDADE MEDIDA DE VOLUME');
    console.log('\n--------------------------------------------------');
    const value = readLine.questionInt('\nDigite o valor a ser convertido: ');
    const indexBase = readLine.keyInSelect(unitsVolum, '\nEscolha a unidade base: ');
    const indexConvert = readLine.keyInSelect(unitsVolum, '\nEscolha a unidade para que deseja converter: ');
    const result = convertVolum(value, unitsVolum[indexBase], unitsVolum[indexConvert]);
    console.log(`\n${value}${unitsVolum[indexBase]} é igual a ${result}${unitsVolum[indexConvert]}`);
}
;
module.exports = {
    execVolum,
};
