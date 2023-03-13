const unitsVolum = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convertVolum(
  value: number,
  baseUnit: string,
  convertUnit: string,
): number {
  const indexBaseUnit = unitsVolum.indexOf(baseUnit);
  const indexConvertUnit = unitsVolum.indexOf(convertUnit);
  const expoent = indexConvertUnit - indexBaseUnit;

  return value * Math.pow(1000, expoent);
}

function execVolum(): void {
  console.log('\nBEM VINDO AO CONVERSOR DE UNIDADE MEDIDA DE VOLUME');

  console.log('\n--------------------------------------------------');

  readLine.setDefaultOptions({
    limit: unitsVolum,
  });
  console.log('\nOpções disponíveis: km³, hm³, dam³, m³, dm³, cm³, mm³');

  const value: number = readLine.questionInt(
    '\nDigite o valor a ser convertido: ',
  );
  const baseUnit: string = readLine.question('\nDigite a unidade base: ');
  const convertUnit: string = readLine.question(
    '\nDigite a unidade para que deseja converter: ',
  );

  const result = convertVolum(value, baseUnit, convertUnit);
  console.log(`\n${value}${baseUnit} é igual a ${result}${convertUnit}`);
};

execVolum()