import { LocalStorageService } from "./localStorage";
import { CookieStorageService } from "./cookieStorage";
import { Storage } from "../shared/interfaces";

type StoredData = {[key: string]: any};

export class StorageService {
  private static _instance: StorageService;
  readonly storageKey: string = 'acnh-critterpedia';

  private data: StoredData = {};

  private storageService: Storage | null = null;

  constructor() {
    if (StorageService._instance !== undefined) {
      return StorageService._instance;
    }

    this.initNewInstance();
  }

  private initNewInstance() {
    const localStorageService = new LocalStorageService();
    const cookieStorageService = new CookieStorageService();

    if (localStorageService.isSupported()) {
      this.storageService = localStorageService;
    } else if (cookieStorageService.isSupported()) {
      this.storageService = cookieStorageService;
    }

    this.fetchStoredData();

    StorageService._instance = this;
  }

  private fetchStoredData() {
    if (!this.storageService) return;

    const restoredData = this.storageService.fetch(this.storageKey);

    if (restoredData !== undefined) {
      this.data = restoredData;
    }
  }

  private saveStoredData() {
    if (this.storageService) {
      this.storageService.save(this.storageKey, this.data);
    }
  }

  get(localKey: string): any {
    return this.data[localKey];
  }

  set(localKey: string, data: any) {
    this.data[localKey] = data;
    this.saveStoredData();
  }
}
