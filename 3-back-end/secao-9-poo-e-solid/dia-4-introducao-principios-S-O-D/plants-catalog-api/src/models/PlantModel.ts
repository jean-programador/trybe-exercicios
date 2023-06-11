import fs from 'fs/promises';
import path from 'path';
import { IModel } from './interfaces/IModel';
import IPlant from './interfaces/IPlant';
import OpsModel from './OpsModel';

export default class PlantModel implements IModel<IPlant> {
  private readonly Opsmodel: OpsModel;

  constructor(opsModel: OpsModel) {
    this.Opsmodel = opsModel;
    this.getAll = this.getAll.bind(this);
  }

  private readonly plantsFile = path.join(
    __dirname,
    '..',
    'models',
    'database',
    'plantsData.json',
  );

  private async readFileAsync(): Promise<IPlant[]> {
    const dataRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    return JSON.parse(dataRaw) as IPlant[];
  }

  public async getAll(): Promise<IPlant[]> {
    return this.readFileAsync();
  }

  public async getById(id: string): Promise<IPlant | null> {
    const plants = await this.getAll();
    const plantById = plants.find((plant) => plant.id === Number(id));
    return plantById || null;
  }

  public async create(newPlant: Omit<IPlant, 'id'>): Promise<IPlant> {
    const plants = await this.getAll();
    const newPlantId = await this.Opsmodel.updateOpsFile(1);
    const plant = { id: newPlantId, ...newPlant };
    plants.push(plant);

    await fs.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));

    return plant;
  }

  public async update(plant: IPlant): Promise<IPlant> {
    const plants = await this.getAll();

    const IndexToUpdate = plants.findIndex((p) => p.id === plant.id);

    plants.splice(IndexToUpdate, 1, plant);

    await fs.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));

    return plant;
  }

  public async removeById(id: string): Promise<boolean> {
    const plants = await this.getAll();

    const IndexToRemove = plants.findIndex((p) => p.id === Number(id));

    if (IndexToRemove >= 0) {
      plants.splice(IndexToRemove, 1);

      await fs.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));
    }

    return IndexToRemove >= 0;
  }
}
