import { Request, Response, NextFunction } from 'express';
import PlantService from '../services/PlantService';

class PlantController {
  private service: PlantService;

  constructor(plantService: PlantService) {
    this.service = plantService;
  }

  public async getAll(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const plants = await this.service.getAll();
      return res.status(200).json(plants);
    } catch (error) {
      next(error);
    }
  }

  public async getById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const plant = await this.service.getById(req.params.id);
      if (plant) return res.status(200).json(plant);
      return res.status(404).json({ message: 'Plant not found' });
    } catch (error) {
      next(error);
    }
  }

  public async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const plantUpdated = await this.service.update(req.body);
      if (plantUpdated) return res.status(201).json(plantUpdated);
      return res.status(404).json({ message: 'Plant not found' });
    } catch (error) {
      next(error);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const plant = await this.service.create(req.body);
      return res.status(201).json(plant);
    } catch (error) {
      next(error);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const removed = await this.service.removeById(req.params.id);
      if (removed) return res.status(204).send();
      return res.status(404).json({ message: 'Plant not found' });
    } catch (error) {
      next(error);
    }
  }
}

export default PlantController;
