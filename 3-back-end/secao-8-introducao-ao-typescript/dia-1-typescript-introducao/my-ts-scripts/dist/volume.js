"use strict";
const unitsVolum = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function convertVolum(value, baseUnit, convertUnit) {
    const indexBaseUnit = unitsVolum.indexOf(baseUnit);
    const indexConvertUnit = unitsVolum.indexOf(convertUnit);
    const expoent = indexConvertUnit - indexBaseUnit;
    return value * Math.pow(1000, expoent);
}
(function execArea() {
    console.log('\nBEM VINDO AO CONVERSOR DE UNIDADE MEDIDA DE VOLUME');
    console.log('\n--------------------------------------------------');
    readLine.setDefaultOptions({
        limit: unitsVolum,
    });
    console.log('\nOpções disponíveis: km³, hm³, dam³, m³, dm³, cm³, mm³');
    const value = readLine.questionInt('\nDigite o valor a ser convertido: ');
    const baseUnit = readLine.question('\nDigite a unidade base: ');
    const convertUnit = readLine.question('\nDigite a unidade para que deseja converter: ');
    const result = convertVolum(value, baseUnit, convertUnit);
    console.log(`\n${value}${baseUnit} é igual a ${result}${convertUnit}`);
})();
