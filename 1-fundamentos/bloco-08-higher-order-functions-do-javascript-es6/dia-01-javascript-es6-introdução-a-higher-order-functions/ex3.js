// 3 - Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['B', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'D'];

const calcPoints = (param1, param2, points) => {
    for (let index in param1) {
        if (param1[index] === param2[index]) {
            points += 1;
        } else if (param2[index] === 'N.A') {
            points = points;
        } else {
            points -= 0.5;
        }
    }
    return points;
}

const showResult = (RIGHT_ANSWERS, STUDENT_ANSWERS, calcPoints) => {
    let points = 0;
    points = calcPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, points);
    return points;
};

console.log(showResult(RIGHT_ANSWERS,STUDENT_ANSWERS, calcPoints))