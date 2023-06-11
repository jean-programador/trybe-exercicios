"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
class OpsModel {
    constructor() {
        this.opsFile = path_1.default.join(__dirname, '..', 'models', 'database', 'opsInfo.json');
    }
    async updateOpsFile(incrementAmount = 1) {
        const dataRaw = await promises_1.default.readFile(this.opsFile, { encoding: 'utf8' });
        const opsInfo = JSON.parse(dataRaw);
        opsInfo.createdPlants += incrementAmount;
        await promises_1.default.writeFile(this.opsFile, JSON.stringify(opsInfo, null, 2));
        return opsInfo.createdPlants;
    }
}
exports.default = OpsModel;
