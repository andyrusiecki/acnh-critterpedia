export function isLocalStorageSupported(): boolean {
  const testStr = 'test';
  try {
    localStorage.setItem(testStr, testStr);
    localStorage.removeItem(testStr);
    return true;
  } catch(e) {
    return false;
  }
}

export function getFromLocalStorage(key: string): any | undefined {
  const storedStr: string | null = localStorage.getItem(key);

  if (storedStr === null) return undefined;

  let data: any | undefined = undefined;
  try {
    data = JSON.parse(storedStr);
  } catch (e) {
    console.error(e);
  }

  return data;
}

export function saveToLocalStorage(key: string, data: any): void {
  const strData: string = JSON.stringify(data);

  try {
    localStorage.setItem(key, strData);
  } catch (e) {
    console.error(e);
  }
}
