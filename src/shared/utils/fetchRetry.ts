export const fetchRetry = async (
  url: string,
  options: RequestInit,
  count: number
): Promise<Response> => {
  try {
    return await fetch(url, options);
  } catch (err) {
    if (count === 1) throw err;
    return await fetchRetry(url, options, count - 1);
  }
};
