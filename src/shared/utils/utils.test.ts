import { fetchRetry } from "./fetchRetry";
import { roundToFirstDecimal } from "./utils";
import { enableFetchMocks } from "jest-fetch-mock";
import fetch from "jest-fetch-mock";

enableFetchMocks();

describe("roundToFirstDecimal()", () => {
  it("should round to first decimal", () => {
    expect(roundToFirstDecimal(3.1415)).toBe(3.1);
  });

  it("should return original integer number", () => {
    expect(roundToFirstDecimal(3)).toBe(3);
  });
});

describe("fetchRetry()", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("should make one request by default", () => {
    fetchRetry("http://testhost:666");
    expect(fetch).toBeCalled();
  });

  it("should succeed if rejections end", async () => {
    // eslint-disable-next-line max-nested-callbacks
    fetch.mockRejectOnce(new Error("fake error message"));
    fetch.mockRejectOnce(new Error("fake error message"));
    const response = await fetchRetry("http://testhost:666", 3);

    expect(fetch).toBeCalledTimes(3);
    expect(response.statusText).toBe("OK");
  });

  it("should make many request attempts and fail", async () => {
    fetch.mockReject(new Error("fake error message"));

    // eslint-disable-next-line max-nested-callbacks
    await expect(() => fetchRetry("http://testhost:666", 5)).rejects.toThrow(
      "fake error message"
    );
    expect(fetch).toBeCalled();
  });
});
