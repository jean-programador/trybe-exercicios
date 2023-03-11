"use strict";
function convert(value, baseUnit, convertUnit) {
    if (convertUnit === 'km') {
        return convertToQuilometer(value, baseUnit);
    }
    if (convertUnit === 'hm') {
        return convertToHectometer(value, baseUnit);
    }
    if (convertUnit === 'dam') {
        return convertToDecameter(value, baseUnit);
    }
    if (convertUnit === 'm') {
        return convertToMeter(value, baseUnit);
    }
    if (convertUnit === 'dm') {
        return convertToDecimeter(value, baseUnit);
    }
    if (convertUnit === 'cm') {
        return convertToCentimeter(value, baseUnit);
    }
    if (convertUnit === 'mm') {
        return convertToMilimeter(value, baseUnit);
    }
    console.log('Não foi possível converter, unidade de conversão inválida!');
    return value;
}
function convertToQuilometer(value, baseUnit) {
    switch (baseUnit) {
        case 'hm':
            return value / 10;
        case 'dam':
            return value / 100;
        case 'm':
            return value / 1000;
        case 'dm':
            return value / 10000;
        case 'cm':
            return value / 100000;
        case 'mm':
            return value / 1000000;
        default:
            console.log('Não foi possível converter, unidade base inválida!');
            return value;
    }
}
function convertToHectometer(value, baseUnit) {
    switch (baseUnit) {
        case 'km':
            return value * 10;
        case 'dam':
            return value / 10;
        case 'm':
            return value / 100;
        case 'dm':
            return value / 1000;
        case 'cm':
            return value / 10000;
        case 'mm':
            return value / 10000;
        default:
            console.log('Não foi possível converter, unidade base inválida!');
            return value;
    }
}
function convertToDecameter(value, baseUnit) {
    switch (baseUnit) {
        case 'km':
            return value * 100;
        case 'hm':
            return value * 10;
        case 'm':
            return value / 10;
        case 'dm':
            return value / 100;
        case 'cm':
            return value / 1000;
        case 'mm':
            return value / 10000;
        default:
            console.log('Não foi possível converter, unidade base inválida!');
            return value;
    }
}
function convertToMeter(value, baseUnit) {
    switch (baseUnit) {
        case 'km':
            return value * 1000;
        case 'hm':
            return value * 100;
        case 'dam':
            return value * 10;
        case 'dm':
            return value / 10;
        case 'cm':
            return value / 100;
        case 'mm':
            return value / 1000;
        default:
            console.log('Não foi possível converter, unidade base inválida!');
            return value;
    }
}
function convertToDecimeter(value, baseUnit) {
    switch (baseUnit) {
        case 'km':
            return value * 10000;
        case 'hm':
            return value * 1000;
        case 'dam':
            return value * 100;
        case 'm':
            return value * 10;
        case 'cm':
            return value / 10;
        case 'mm':
            return value / 100;
        default:
            console.log('Não foi possível converter, unidade base inválida!');
            return value;
    }
}
function convertToCentimeter(value, baseUnit) {
    switch (baseUnit) {
        case 'km':
            return value * 100000;
        case 'hm':
            return value * 10000;
        case 'dam':
            return value * 1000;
        case 'm':
            return value * 100;
        case 'dm':
            return value * 10;
        case 'mm':
            return value / 10;
        default:
            console.log('Não foi possível converter, unidade base inválida!');
            return value;
    }
}
function convertToMilimeter(value, baseUnit) {
    switch (baseUnit) {
        case 'km':
            return value * 1000000;
        case 'hm':
            return value * 100000;
        case 'dam':
            return value * 10000;
        case 'm':
            return value * 1000;
        case 'dm':
            return value * 100;
        case 'cm':
            return value * 10;
        default:
            console.log('Não foi possível converter, unidade base inválida!');
            return value;
    }
}
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convert2(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
console.log(convert(10, 'dam', 'cm'));
console.log(convert2(10, 'dam', 'cm'));
