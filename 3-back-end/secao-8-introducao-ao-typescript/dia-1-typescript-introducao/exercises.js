"use strict";
exports.__esModule = true;
exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return Math.pow(side, 2);
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
    return sides.reduce(function (acc, side) { return acc + side; }, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function triangleCheck(sideA, sideB, sideC) {
    var checkSideA = sideB - sideC < sideA && sideA < sideB + sideC;
    var checkSideB = sideA - sideC < sideB && sideB < sideA + sideC;
    var checkSideC = sideA - sideB < sideC && sideC < sideA + sideB;
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
