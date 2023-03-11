"use strict";
const unitsArea = ['km²', 'hm²', 'dam²', 'm²', 'dm²	', 'cm²', 'mm²'];
function convertArea(value, baseUnit, convertUnit) {
    const indexBaseUnit = unitsArea.indexOf(baseUnit);
    const indexConvertUnit = unitsArea.indexOf(convertUnit);
    const expoent = indexConvertUnit - indexBaseUnit;
    return value * Math.pow(100, expoent);
}
(function execArea() {
    console.log('\nBEM VINDO AO CONVERSOR DE UNIDADE MEDIDA DE ÁREA');
    console.log('\n--------------------------------------------------');
    readLine.setDefaultOptions({
        limit: unitsArea,
    });
    console.log('\nOpções disponíveis: km², hm², dam², m², dm², cm², mm²');
    const value = readLine.questionInt('\nDigite o valor a ser convertido: ');
    const baseUnit = readLine.question('\nDigite a unidade base: ');
    const convertUnit = readLine.question('\nDigite a unidade para que deseja converter: ');
    const result = convertArea(value, baseUnit, convertUnit);
    console.log(`\n${value}${baseUnit} é igual a ${result}${convertUnit}`);
})();
