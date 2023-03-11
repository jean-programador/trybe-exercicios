const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convertCapacity(
  value: number,
  baseUnit: string,
  convertUnit: string,
): number {
  const indexBaseUnit = units.indexOf(baseUnit);
  const indexConvertUnit = units.indexOf(convertUnit);
  const expoent = indexConvertUnit - indexBaseUnit;

  return value * Math.pow(10, expoent);
}
