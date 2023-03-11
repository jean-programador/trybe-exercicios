"use strict";
// ./index.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var Ex = __importStar(require("./exercises"));
console.log('A ÁREA DE UM:');
console.log("- Quadrado de lado 10cm: " + Ex.getSquareArea(10) + "cm\u00B2");
console.log("- Quadrado de lado 5cm: " + Ex.getSquareArea(5) + "cm\u00B2");
console.log("- Quadrado de lado 100cm: " + Ex.getSquareArea(100) + "cm\u00B2");
console.log("- Ret\u00E2ngulo de base 10cm e altura 25cm: " + Ex.getRectangleArea(10, 25) + "cm\u00B2");
console.log("- Ret\u00E2ngulo de base 5cm e altura 30cm: " + Ex.getRectangleArea(5, 30) + "cm\u00B2");
console.log("- Ret\u00E2ngulo de base 200cm e altura 100cm: " + Ex.getRectangleArea(200, 100) + "cm\u00B2");
console.log("- Tri\u00E2ngulo de base 10cm e altura 25cm: " + Ex.getTriangleArea(10, 25) + "cm\u00B2");
console.log("- Tri\u00E2ngulo de base 5cm e altura 30cm: " + Ex.getTriangleArea(5, 30) + "cm\u00B2");
console.log("- Tri\u00E2ngulo de base 100cm e altura 200cm: " + Ex.getTriangleArea(100, 200) + "cm\u00B2");
console.log('\nO PERÍMETRO DE UM:');
console.log("- Quadrado de lado 10cm: " + Ex.getPolygonPerimeter([10, 10, 10, 10]) + "cm");
console.log("- Ret\u00E2ngulo de base 10cm e altura 25cm: " + Ex.getPolygonPerimeter([
    10, 25, 10, 25,
]) + "cm");
console.log("- Tri\u00E2ngulo cujos lados tem 10cm cada: " + Ex.getPolygonPerimeter([
    10, 10, 10,
]) + "cm");
console.log('\nVERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:');
console.log("- 10cm, 5cm e 3cm: " + Ex.triangleCheck(10, 5, 3));
console.log("- 10cm, 5cm e 3cm: " + Ex.triangleCheck(10, 5, 8));
console.log("- 10cm, 5cm e 3cm: " + Ex.triangleCheck(30, 30, 30));
