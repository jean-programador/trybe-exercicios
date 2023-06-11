"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = __importDefault(require("../exceptions/HttpException"));
class PlantService {
    constructor(model) {
        this.model = model;
    }
    async getAll() {
        const plants = await this.model.getAll();
        return plants;
    }
    async getById(id) {
        const plant = await this.model.getById(id);
        return plant;
    }
    static validateNewPlant({ breed, needsSun, origin, size, }) {
        if (typeof breed !== 'string') {
            throw new HttpException_1.default(400, 'Attribute "breed" must be string.');
        }
        if (typeof needsSun !== 'boolean') {
            throw new HttpException_1.default(400, 'Attribute "needsSun" must be boolean.');
        }
        if (typeof origin !== 'string') {
            throw new HttpException_1.default(400, 'Attribute "origin" must be string.');
        }
        if (typeof size !== 'number') {
            throw new HttpException_1.default(400, 'Attribute "size" must be number.');
        }
    }
    async create(plant) {
        const { needsSun, origin, size } = plant;
        PlantService.validateNewPlant(plant);
        const waterFrequency = needsSun
            ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
            : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
        const newPlant = { ...plant, waterFrequency };
        const plantCreated = await this.model.create(newPlant);
        return plantCreated;
    }
    async update(plant) {
        PlantService.validateNewPlant(plant);
        const plantUpdated = await this.model.update(plant);
        return plantUpdated;
    }
    async removeById(id) {
        const removed = await this.model.removeById(id);
        return removed;
    }
}
exports.default = PlantService;
