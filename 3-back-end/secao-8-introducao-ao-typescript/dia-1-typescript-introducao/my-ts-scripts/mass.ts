const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg']

function convertMass(value: number, baseUnit: string, convertUnit: string): number {
  const indexBaseUnit = units.indexOf(baseUnit);
  const indexConvertUnit = units.indexOf(convertUnit);
  const expoent = indexConvertUnit - indexBaseUnit;

  return value * Math.pow(10, expoent)
}
