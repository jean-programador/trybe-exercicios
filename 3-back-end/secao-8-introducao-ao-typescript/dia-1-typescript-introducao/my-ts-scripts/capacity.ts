const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convertCapacity(
  value: number,
  baseUnit: string,
  convertUnit: string,
): number {
  const indexBaseUnit = unitsCapacity.indexOf(baseUnit);
  const indexConvertUnit = unitsCapacity.indexOf(convertUnit);
  const expoent = indexConvertUnit - indexBaseUnit;

  return value * Math.pow(10, expoent);
}
