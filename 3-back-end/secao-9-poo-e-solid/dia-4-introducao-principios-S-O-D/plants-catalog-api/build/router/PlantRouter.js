"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PlantController_1 = __importDefault(require("../controllers/PlantController"));
const plantController = new PlantController_1.default();
const plantRouter = (0, express_1.Router)();
plantRouter.get('/', (req, res, next) => plantController.getAll(req, res, next));
plantRouter.post('/', (req, res, next) => plantController.create(req, res, next));
exports.default = plantRouter;
