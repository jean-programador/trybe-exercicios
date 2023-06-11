"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlantController {
    constructor(plantService) {
        this.service = plantService;
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
    async getById(req, res, next) {
        try {
            const plant = await this.service.getById(req.params.id);
            if (plant)
                return res.status(200).json(plant);
            return res.status(404).json({ message: 'Plant not found' });
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const plantUpdated = await this.service.update(req.body);
            if (plantUpdated)
                return res.status(201).json(plantUpdated);
            return res.status(404).json({ message: 'Plant not found' });
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
    async delete(req, res, next) {
        try {
            const removed = await this.service.removeById(req.params.id);
            if (removed)
                return res.status(204).send();
            return res.status(404).json({ message: 'Plant not found' });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = PlantController;
