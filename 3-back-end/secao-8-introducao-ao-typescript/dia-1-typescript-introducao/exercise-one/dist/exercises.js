"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCircleArea = exports.getTrapezioArea = exports.getLosangleArea = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = sideB - sideC < sideA && sideA < sideB + sideC;
    const checkSideB = sideA - sideC < sideB && sideB < sideA + sideC;
    const checkSideC = sideA - sideB < sideC && sideC < sideA + sideB;
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
// Crie uma nova função para calcular a área de um losango. 
// A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois. 
// A = (D * d) / 2
function getLosangleArea(largerDiagonal, smallerDiagonal) {
    return (largerDiagonal * smallerDiagonal) / 2;
}
exports.getLosangleArea = getLosangleArea;
// Crie uma nova função para calcular a área de um trapézio.
// A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois.
// A = [(B + b) * h] / 2
function getTrapezioArea(largerBase, smallerBase, hight) {
    return ((largerBase + smallerBase) * hight) / 2;
}
exports.getTrapezioArea = getTrapezioArea;
// Crie uma nova função para calcular a área de um círculo.
// A área do círculo de raio r é calculada multiplicando o raio ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14).
// A = ℼ * r².
// Dica: você pode acessar o valor de ℼ utilizando o módulo nativo Math.PI.
function getCircleArea(r) {
    return (Math.PI * (r ** 2));
}
exports.getCircleArea = getCircleArea;
