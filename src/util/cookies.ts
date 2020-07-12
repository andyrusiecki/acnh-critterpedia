const COOKIE_EXPIRATION_TIME: number = 1000 * 60 * 60 * 24 * 365 * 3; // 3 years

export function isCookieSupported(): boolean {
  if (navigator.cookieEnabled === false) {
    return false;
  }

  document.cookie = "cookietest=1";
  const result = document.cookie.indexOf("cookietest=") !== -1;
  document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";

  return result;
}


export function getFromCookie(key: string): any | undefined {
  const keyIndex = document.cookie.indexOf(key + '=');

  if (keyIndex === -1) return undefined;

  const start = keyIndex + key.length + 1;
  const end = document.cookie.indexOf(';', start);
  const storedStr = document.cookie.substr(start, end - start )

  let data: any | undefined = undefined;
  try {
    data = JSON.parse(storedStr);
  } catch (e) {
    console.error(e);
  }

  return data;
}

export function saveToCookie(key: string, data: any): void {
  let cookieStr: string = key + '=' + JSON.stringify(data);

  // cookie expiration
  const date = new Date(Date.now() + COOKIE_EXPIRATION_TIME);
  cookieStr += `; expires=${date.toUTCString()}`;

  cookieStr += '; path=/';

  document.cookie = cookieStr;
}
