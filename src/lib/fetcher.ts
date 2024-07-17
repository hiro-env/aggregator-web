export async function fetcher<T>(config: {
  url: string,
  method: string,
  params?: object,
}): Promise<T> {
  const response = await fetch(config.url, {
    method: config.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(config.params)
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json() as Promise<T>;
}
