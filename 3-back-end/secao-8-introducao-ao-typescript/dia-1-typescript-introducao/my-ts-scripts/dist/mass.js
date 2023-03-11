"use strict";
const unitsMass = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convertMass(value, baseUnit, convertUnit) {
    const indexBaseUnit = unitsMass.indexOf(baseUnit);
    const indexConvertUnit = unitsMass.indexOf(convertUnit);
    const expoent = indexConvertUnit - indexBaseUnit;
    return value * Math.pow(10, expoent);
}
(function execMass() {
    console.log('\nBEM VINDO AO CONVERSOR DE UNIDADE MEDIDA DE MASSA');
    console.log('\n--------------------------------------------------');
    readLine.setDefaultOptions({
        limit: unitsMass,
    });
    console.log('\nOpções disponíveis: kg, hg, dag, g, dg, cg, mg');
    const value = readLine.questionInt('\nDigite o valor a ser convertido: ');
    const baseUnit = readLine.question('\nDigite a unidade base: ');
    const convertUnit = readLine.question('\nDigite a unidade para que deseja converter: ');
    const result = convertMass(value, baseUnit, convertUnit);
    console.log(`\n${value}${baseUnit} é igual a ${result}${convertUnit}`);
})();
