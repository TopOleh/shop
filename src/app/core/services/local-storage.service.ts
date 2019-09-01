export class LocalStorageService {

  constructor() { }

  setItem(item: string): void {
    const generatedKey = Math.floor(Math.random()).toString();
    window.localStorage.setItem(generatedKey, item);
    console.log('generatedKey :', generatedKey);
  }

  getItem(itemKey: string): string {
    return window.localStorage.getItem(itemKey);
  }

  removeItem(itemKey: string): void {
    window.localStorage.removeItem(itemKey);
  }

}
