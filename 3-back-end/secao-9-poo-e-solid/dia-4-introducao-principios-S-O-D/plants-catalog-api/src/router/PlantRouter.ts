import { Router } from 'express';
import PlantController from '../controllers/PlantController';
import PlantService from '../services/PlantService';
import PlantModel from '../models/PlantModel';
import OpsModel from '../models/OpsModel';

const opsModel = new OpsModel();
const plantModel = new PlantModel(opsModel);
const plantService = new PlantService(plantModel);
const plantController = new PlantController(plantService);

const plantRouter = Router();

plantRouter.get('/', (req, res, next) => plantController.getAll(req, res, next));
plantRouter.get('/:id', (req, res, next) => plantController.getById(req, res, next));
plantRouter.post('/', (req, res, next) => plantController.create(req, res, next));
plantRouter.put('/', (req, res, next) => plantController.update(req, res, next));
plantRouter.delete('/:id', (req, res, next) => plantController.delete(req, res, next));

export default plantRouter;
