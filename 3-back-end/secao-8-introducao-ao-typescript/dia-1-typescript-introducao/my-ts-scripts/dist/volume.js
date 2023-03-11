"use strict";
const unitsVolum = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function convertVolum(value, baseUnit, convertUnit) {
    const indexBaseUnit = unitsVolum.indexOf(baseUnit);
    const indexConvertUnit = unitsVolum.indexOf(convertUnit);
    const expoent = indexConvertUnit - indexBaseUnit;
    return value * Math.pow(1000, expoent);
}
