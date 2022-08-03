const salary = 2700;
let inss;
let inssTotal;
let impostoDeRenda;
let n;
let irTotal;
let salaryLiquido;

console.log("Vamos calcular o seu salário líquido");
console.log("");

if (salary <= 1556.94) {
    inss = 8;
    inssTotal= (inss/100) * salary;
} else if (salary > 1556.94 && salary <= 2594.92) {
    inss = 9;
    inssTotal= (inss/100) * salary;
} else if (salary > 2594.92 && salary <= 5189.82) {
    inss = 11;
    inssTotal= (inss/100) * salary;
}else {
    inssTotal = 570.88;
};

salaryLiquido = salary - inssTotal;

if (salaryLiquido <= 1903.98) {
    irTotal = 0;
    salaryLiquido = salaryLiquido - irTotal;
    console.log("Você vai receber de salário líquido R$"+salaryLiquido);
} else if (salaryLiquido > 1903.98 && salaryLiquido <= 2826.65) {
    impostoDeRenda = 7.5;
    n = 142.8;
    irTotal= (impostoDeRenda/100) * salaryLiquido - n;
    salaryLiquido = salaryLiquido - irTotal;
    console.log("Você vai receber de salário líquido R$"+salaryLiquido); 
} else if (salaryLiquido > 2826.65 && salaryLiquido <= 3751.05) {
    impostoDeRenda = 15;
    n = 354.8;
    irTotal= (impostoDeRenda/100) * salaryLiquido - n;
    salaryLiquido = salaryLiquido - irTotal;
    console.log("Você vai receber de salário líquido R$"+salaryLiquido);
} else if (salaryLiquido > 3751.05 && salaryLiquido <= 4664.68) {
    impostoDeRenda = 22.5;
    n = 636.13;
    irTotal= (impostoDeRenda/100) * salaryLiquido - n;
    salaryLiquido = salaryLiquido - irTotal;
    console.log("Você vai receber de salário líquido R$"+salaryLiquido);
} else if (salaryLiquido > 4664.68) {
    impostoDeRenda = 27.5;
    n = 869.36;
    irTotal= (impostoDeRenda/100) * salaryLiquido - n;
    salaryLiquido = salaryLiquido - irTotal;
    console.log("Você vai receber de salário líquido R$"+salaryLiquido);
};