export const fetchRetry = async (
  url: string,
  attemptsCount: number = 1,
  options?: RequestInit
): Promise<Response> => {
  try {
    const response = await fetch(url, options).then((res) => {
      if (!res.ok) {
        throw new Error("Request failure");
      }
      return res;
    });

    return response;
  } catch (err) {
    if (attemptsCount === 1) throw err;

    return await fetchRetry(url, attemptsCount - 1, options);
  }
};
