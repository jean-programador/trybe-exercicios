"use strict";
const unitsCapacity2 = ['km²', 'hm²', '	dam²', 'm²', 'dm²	', 'cm²', 'mm²'];
function convertArea(value, baseUnit, convertUnit) {
    const indexBaseUnit = unitsCapacity.indexOf(baseUnit);
    const indexConvertUnit = unitsCapacity.indexOf(convertUnit);
    const expoent = indexConvertUnit - indexBaseUnit;
    return value * Math.pow(100, expoent);
}
