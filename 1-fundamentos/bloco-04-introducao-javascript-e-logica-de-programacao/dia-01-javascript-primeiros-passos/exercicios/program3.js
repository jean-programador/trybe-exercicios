const a = 500;
const b = 500;
const c = 500;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c ){
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
} else {
    console.log("Numeros Iguais");
}