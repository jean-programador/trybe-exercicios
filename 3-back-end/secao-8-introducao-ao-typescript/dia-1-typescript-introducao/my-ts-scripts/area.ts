const unitsArea = ['km²', 'hm²', '	dam²', 'm²', 'dm²	', 'cm²', 'mm²'];

function convertArea(
  value: number,
  baseUnit: string,
  convertUnit: string,
): number {
  const indexBaseUnit = unitsArea.indexOf(baseUnit);
  const indexConvertUnit = unitsArea.indexOf(convertUnit);
  const expoent = indexConvertUnit - indexBaseUnit;

  return value * Math.pow(100, expoent);
}
