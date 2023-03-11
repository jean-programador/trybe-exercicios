const unitsCapacity2 = ['km²', 'hm²', '	dam²', 'm²', 'dm²	', 'cm²', 'mm²'];

function convertArea(
  value: number,
  baseUnit: string,
  convertUnit: string,
): number {
  const indexBaseUnit = unitsCapacity.indexOf(baseUnit);
  const indexConvertUnit = unitsCapacity.indexOf(convertUnit);
  const expoent = indexConvertUnit - indexBaseUnit;

  return value * Math.pow(100, expoent);
}
