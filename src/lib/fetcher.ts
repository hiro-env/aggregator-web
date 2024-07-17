import config from '../config/config';

export async function fetcher<T>({ url, method, params }: {
  url: string,
  method: string,
  params?: object,
}): Promise<T> {
  const fullUrl = `${config.API_BASE_URI}${url}`;
  const response = await fetch(fullUrl, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: method === 'GET' ? null : JSON.stringify(params)
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json() as Promise<T>;
}
