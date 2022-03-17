export const fetchRetry = async (
  url: string,
  options: RequestInit,
  count: number
): Promise<Response> => {
  try {
    const response = await fetch(url, options).then((res) => {
      if (!res.ok) {
        throw new Error("Request failure");
      }
      return res.json();
    });

    return response;
  } catch (err) {
    if (count === 1) throw err;

    return await fetchRetry(url, options, count - 1);
  }
};
