"use strict";
const readLine = require('readline-sync');
const unitsLength = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convertLength(value, baseUnit, convertUnit) {
    const indexBaseUnit = unitsLength.indexOf(baseUnit);
    const indexConvertUnit = unitsLength.indexOf(convertUnit);
    const expoent = indexConvertUnit - indexBaseUnit;
    return value * Math.pow(10, expoent);
}
(function execLength() {
    console.log('\nBEM VINDO AO CONVERSOR DE UNIDADE MEDIDA DE COMPRIMENTO');
    console.log('\n--------------------------------------------------');
    readLine.setDefaultOptions({
        limit: unitsLength,
    });
    console.log('\nOpções disponíveis: km, hm, dam, m, dm, cm, mm');
    const value = readLine.questionInt('\nDigite o valor a ser convertido: ');
    const baseUnit = readLine.question('\nDigite a unidade base: ');
    const convertUnit = readLine.question('\nDigite a unidade para que deseja converter: ');
    const result = convertLength(value, baseUnit, convertUnit);
    console.log(`\n${value}${baseUnit} é igual a ${result}${convertUnit}`);
})();
