import { AllFish } from '../shared/constants';
import { Fish } from '../shared/interfaces';
import { StorageService } from './storage';

export class FishDataService {
  readonly storageKey = 'donatedFish';

  private static _instance: FishDataService;

  private data = new Map<number, Fish>();
  private storage = new StorageService();

  constructor() {
    if (FishDataService._instance !== undefined) {
      return FishDataService._instance;
    }

    for (let fish of AllFish) {
      this.data.set(fish.id, fish);
    }

    this.restoreDonatedValues();
  }

  getAll(): Fish[] {
    return Array.from(this.data).map(([id, fish]) => fish);
  }

  getByID(id: number): Fish | undefined {
    return this.data.get(id);
  }

  setDonated(id: number, isDonated: boolean) {
    const fish = this.getByID(id);

    if (fish !== undefined && fish.donated !== isDonated) {
      fish.donated = isDonated;
      this.saveDonatedValues()
    }
  }

  private restoreDonatedValues() {
    const donatedIDs: number[] | undefined = this.storage.get(this.storageKey);

    if (donatedIDs !== undefined) {
      for (let id of donatedIDs) {
        const fish = this.getByID(id);

        if (fish !== undefined) {
          fish.donated = true;
        }
      }
    }
  }

  private saveDonatedValues() {
    const donatedIDs = this.getAllDonatedIDs();
    this.storage.set(this.storageKey, donatedIDs);
  }

  private getAllDonatedIDs(): number[] {
    const donatedIDs: number[] = [];

    for (let [id, fish] of this.data) {
      if (fish.donated) donatedIDs.push(id);
    }

    return donatedIDs;
  }
}
