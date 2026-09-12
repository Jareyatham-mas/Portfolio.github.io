const externalUrl = /^(?:[a-z]+:)?\/\//i;

export function publicAsset(path: string) {
  if (externalUrl.test(path) || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
