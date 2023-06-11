import HttpException from '../exceptions/HttpException';
import PlantModel from '../models/PlantModel';
import IPlant from '../models/interfaces/IPlant';

type INewPlant = Omit<IPlant, 'id' | 'waterFrequency'>;

class PlantService {
  private readonly model: PlantModel;

  constructor(model: PlantModel) {
    this.model = model;
  }

  public async getAll(): Promise<IPlant[]> {
    const plants = await this.model.getAll();
    return plants;
  }

  public async getById(id: string): Promise<IPlant | null> {
    const plant = await this.model.getById(id);
    return plant;
  }

  private static validateNewPlant({
    breed,
    needsSun,
    origin,
    size,
  }: INewPlant): void {
    if (typeof breed !== 'string') {
      throw new HttpException(400, 'Attribute "breed" must be string.');
    }

    if (typeof needsSun !== 'boolean') {
      throw new HttpException(400, 'Attribute "needsSun" must be boolean.');
    }

    if (typeof origin !== 'string') {
      throw new HttpException(400, 'Attribute "origin" must be string.');
    }

    if (typeof size !== 'number') {
      throw new HttpException(400, 'Attribute "size" must be number.');
    }
  }

  public async create(plant: INewPlant): Promise<IPlant> {
    const { needsSun, origin, size } = plant;

    PlantService.validateNewPlant(plant);

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant = { ...plant, waterFrequency };
    const plantCreated = await this.model.create(newPlant);

    return plantCreated;
  }

  public async update(plant: IPlant): Promise<IPlant> {
    PlantService.validateNewPlant(plant);

    const plantUpdated = await this.model.update(plant);

    return plantUpdated;
  }

  public async removeById(id: string): Promise<boolean> {
    const removed = await this.model.removeById(id);
    return removed;
  }
}

export default PlantService;
