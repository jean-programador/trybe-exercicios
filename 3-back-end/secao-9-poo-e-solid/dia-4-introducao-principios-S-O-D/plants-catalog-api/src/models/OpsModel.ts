import fs from 'fs/promises';
import path from 'path';

interface IOpsInfo {
  createdPlants: number;
}

export default class OpsModel {
  private readonly opsFile = path.join(
    __dirname,
    '..',
    'models',
    'database',
    'opsInfo.json',
  );

  public async updateOpsFile(incrementAmount = 1): Promise<number> {
    const dataRaw = await fs.readFile(this.opsFile, { encoding: 'utf8' });
    const opsInfo = JSON.parse(dataRaw) as IOpsInfo;
    opsInfo.createdPlants += incrementAmount;

    await fs.writeFile(this.opsFile, JSON.stringify(opsInfo, null, 2));

    return opsInfo.createdPlants;
  }
}
