const a = 45;
const b = 45;
const c = 90;
let triangulo = true;

if ( a < 0 || b < 0 || c < 0) {
    console.log("ERRO, Ângulo Inválido!!!!");
} else if (a + b + c != 180) {
    triangulo = false;
    console.log(triangulo);
} else if (a + b + c === 180) {
    triangulo = true;
    console.log(triangulo);
}