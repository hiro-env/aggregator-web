import config from '../config/config';

export async function fetcher<T>({ url, method, params }: {
  url: string,
  method: string,
  params?: object,
}): Promise<T> {
  // クエリパラメータをURLに追加
  let fullUrl = `${config.API_BASE_URI}${url}`;
  if (method === 'GET' && params) {
    const queryString = new URLSearchParams(params as Record<string, string>).toString();
    fullUrl = `${fullUrl}?${queryString}`;
  }

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
