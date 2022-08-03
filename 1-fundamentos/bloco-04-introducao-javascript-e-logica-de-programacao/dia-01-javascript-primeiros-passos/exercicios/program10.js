const custo = 25;
const venda = 50;
let imposto = custo * 0.2;
let custoTotal = custo + imposto;
let lucro = venda - custoTotal;

if (custo < 0 || venda < 0) {
    console.log("Erro, insira um valor maior que zero");
} else {
    console.log("O lucro após a venda de 1.000 produtos foi de R$"+lucro*1000);
}