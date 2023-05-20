"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlantService_1 = __importDefault(require("../services/PlantService"));
class PlantController {
    constructor() {
        this.service = new PlantService_1.default();
    }
    async getAll(_req, res, next) {
        try {
            const plants = await this.service.getAll();
            return res.status(200).json(plants);
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const plant = await this.service.create(req.body);
            return res.status(201).json(plant);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = PlantController;
