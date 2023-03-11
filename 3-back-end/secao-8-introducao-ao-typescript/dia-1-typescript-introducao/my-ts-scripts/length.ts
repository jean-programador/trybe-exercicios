function convert(value: number, baseUnit: string, convertUnit: string): number {
if (convertUnit === 'km') {
  return convertToQuilometer(value, baseUnit)
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

function convertToQuilometer(value: number, baseUnit: string): number {
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

function convertToHectometer(value: number, baseUnit: string): number {
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

function convertToDecameter(value: number, baseUnit: string): number {
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


function convertToMeter(value: number, baseUnit: string): number {
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

function convertToDecimeter(value: number, baseUnit: string): number {
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

function convertToCentimeter(value: number, baseUnit: string): number {
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

function convertToMilimeter(value: number, baseUnit: string): number {
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
