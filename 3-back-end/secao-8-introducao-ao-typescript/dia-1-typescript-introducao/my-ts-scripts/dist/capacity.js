"use strict";
const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convertCapacity(value, baseUnit, convertUnit) {
    const indexBaseUnit = units.indexOf(baseUnit);
    const indexConvertUnit = units.indexOf(convertUnit);
    const expoent = indexConvertUnit - indexBaseUnit;
    return value * Math.pow(10, expoent);
}
