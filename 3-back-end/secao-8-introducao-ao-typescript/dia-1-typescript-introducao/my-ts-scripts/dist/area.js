"use strict";
const unitsArea = ['km²', 'hm²', 'dam²', 'm²', 'dm²	', 'cm²', 'mm²'];
function convertArea(value, baseUnit, convertUnit) {
    const indexBaseUnit = unitsArea.indexOf(baseUnit);
    const indexConvertUnit = unitsArea.indexOf(convertUnit);
    const expoent = indexConvertUnit - indexBaseUnit;
    return value * Math.pow(100, expoent);
}
function execArea() {
    const readLine = require('readline-sync');
    console.log('\nBEM VINDO AO CONVERSOR DE UNIDADE MEDIDA DE ÁREA');
    console.log('\n--------------------------------------------------');
    const value = readLine.questionInt('\nDigite o valor a ser convertido: ');
    const indexBase = readLine.keyInSelect(unitsArea, '\nEscolha a unidade base: ');
    const indexConvert = readLine.keyInSelect(unitsArea, '\nEscolha a unidade para que deseja converter: ');
    const result = convertArea(value, unitsArea[indexBase], unitsArea[indexConvert]);
    console.log(`\n${value}${unitsArea[indexBase]} é igual a ${result}${unitsArea[indexConvert]}`);
}
;
module.exports = {
    execArea,
};
