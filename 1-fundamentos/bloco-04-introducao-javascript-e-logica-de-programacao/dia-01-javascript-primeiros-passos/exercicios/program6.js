let peca = "CAVALO";

switch (peca.toLowerCase()) {
    case "peao": 
    console.log(peca+" - Horizontais")
    break;
    case "torre":
    console.log(peca+" - Horizontais e Verticais")
    break;
    case "cavalo":
    console.log(peca+" - Horizontais e Verticais(movimentos em forma de 'L' )")
    break;
    case "bispo":
    console.log(peca+" - Diagonais")
    break;
    case "rainha":
    console.log(peca+" - Horizontais, Verticais e Diagonais");
    break;
    case "rei":
    console.log(peca+" - Horizontais, Verticais e Diagonais");
    break;
    default:
    console.log("Erro, peça inválida!!");
}
