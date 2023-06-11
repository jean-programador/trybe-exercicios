"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
class PlantModel {
    constructor(opsModel) {
        this.plantsFile = path_1.default.join(__dirname, '..', 'models', 'database', 'plantsData.json');
        this.Opsmodel = opsModel;
        this.getAll = this.getAll.bind(this);
    }
    async readFileAsync() {
        const dataRaw = await promises_1.default.readFile(this.plantsFile, { encoding: 'utf8' });
        return JSON.parse(dataRaw);
    }
    async getAll() {
        return this.readFileAsync();
    }
    async getById(id) {
        const plants = await this.getAll();
        const plantById = plants.find((plant) => plant.id === Number(id));
        return plantById || null;
    }
    async create(newPlant) {
        const plants = await this.getAll();
        const newPlantId = await this.Opsmodel.updateOpsFile(1);
        const plant = { id: newPlantId, ...newPlant };
        plants.push(plant);
        await promises_1.default.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));
        return plant;
    }
    async update(plant) {
        const plants = await this.getAll();
        const IndexToUpdate = plants.findIndex((p) => p.id === plant.id);
        plants.splice(IndexToUpdate, 1, plant);
        await promises_1.default.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));
        return plant;
    }
    async removeById(id) {
        const plants = await this.getAll();
        const IndexToRemove = plants.findIndex((p) => p.id === Number(id));
        if (IndexToRemove >= 0) {
            plants.splice(IndexToRemove, 1);
            await promises_1.default.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));
        }
        return IndexToRemove >= 0;
    }
}
exports.default = PlantModel;
