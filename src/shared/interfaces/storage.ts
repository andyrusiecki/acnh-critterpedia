export interface Storage {
  isSupported(): boolean;
  fetch(key: string): any | undefined;
  save(key: string, data: any): void;
}
