export function getBaseURL(): string {
  return process.env.PUBLIC_URL;
}

export function getFullURL(path: string): string {
  let url = getBaseURL();

  if (url[url.length - 1] === '/' && path[0] === '/') {
    url += path.substr(1);
  } else if (url[url.length - 1] !== '/' && path[0] !== '/') {
    url += '/' + path;
  } else {
    url += path;
  }

  return url;
}
