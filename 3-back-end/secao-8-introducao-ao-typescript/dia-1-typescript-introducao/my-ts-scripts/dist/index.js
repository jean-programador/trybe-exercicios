"use strict";
const length = require('./length');
const area = require('./area');
const capacity = require('./capacity');
const mass = require('./mass');
const volum = require('./volume');
const options = [
    'comprimento',
    'massa',
    'area',
    'capacidade',
    'volume',
];
(function startup() {
    const readLine = require('readline-sync');
    const index = readLine.keyInSelect(options, 'Selecione o tipo de conversao que deseja realizar');
    switch (options[index]) {
        case 'comprimento':
            length.execLength();
            break;
        case 'massa':
            mass.execMass();
            break;
        case 'area':
            area.execArea();
            break;
        case 'capacidade':
            capacity.execCapacity();
            break;
        case 'volume':
            volum.execVolum();
            break;
        default:
            break;
    }
})();
