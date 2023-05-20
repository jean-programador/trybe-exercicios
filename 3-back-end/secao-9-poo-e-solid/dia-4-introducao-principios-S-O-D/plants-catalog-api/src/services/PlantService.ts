import fs from 'fs/promises';
import path from 'path';
import HttpException from '../exceptions/HttpException';

interface IPlant {
  id: number;
  breed: string;
  needsSun: boolean;
  origin: string;
  size: number;
  waterFrequency: number;
}

type INewPlant = Omit<IPlant, 'id' | 'waterFrequency'>;

interface IOpsInfo {
  createdPlants: number;
}

class PlantService {
  private readonly plantsFile = path.join(
    __dirname,
    '..',
    'models',
    'database',
    'plantsData.json',
  );

  private readonly opsFile = path.join(
    __dirname,
    '..',
    'models',
    'database',
    'opsInfo.json',
  );

  private async readFileAsync(filePath: string) {
    const dataRaw = await fs.readFileAsync(filePath, { encoding: 'utf8' });
    return JSON.parse(dataRaw);
  }

  private async updateOpsInfo(incrementAmount = 1): Promise<number> {
    const opsInfo = await this.readFileAsync(this.opsFile) as IOpsInfo;
    opsInfo.createdPlants += incrementAmount;

    await fs.writeFile(this.opsFile, JSON.stringify(opsInfo, null, 2));

    return opsInfo.createdPlants;
  }

  public async getAll(): Promise<IPlant[]> {
    const plants= await this.readFileAsync(this.plantsFile) as IPlant[];
    return plants;
  }

  private validateNewPlant({ breed, needsSun, origin, size }: INewPlant) {
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
    
    this.validateNewPlant(plant)

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const plants = await this.readFileAsync(this.plantsFile) as IPlant[];

    const newPlantId = await this.updateOpsInfo(1);
    const newPlant = { id: newPlantId, ...plant, waterFrequency };
    plants.push(newPlant);

    await fs.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));
    return newPlant;
  }
}

export default PlantService;
