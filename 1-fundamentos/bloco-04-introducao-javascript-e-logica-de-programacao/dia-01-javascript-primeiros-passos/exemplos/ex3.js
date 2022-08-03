let nomeCandidato = "Jubileu";
const notaCandidato = 80;

console.log("Bem vindos ao desafio técnico de JavaScript");
console.log("");
console.log("Seu resultado está logo abaixo:");
console.log("");

if (notaCandidato >= 80) {
    console.log("Parabéns você foi aprovado!");
} 
else if (notaCandidato < 80 && notaCandidato >= 60) {
    console.log("Você está na nossa lista de espera!");
}
else {
    console.log("Você foi Reprovado!");
}
