import { getCurrentTimestamp } from "shared/utils";
import { LogItem } from "./types";

export const getRequestLogItem = (
  status: "success" | "failure",
  usersCount: number
): LogItem => ({
  status,
  usersCount,
  timestamp: getCurrentTimestamp(),
});

export const getShallowFiles = (files: File[]) => {
  return files.map(({ name, size, type, lastModified }) => ({
    name,
    lastModified,
    size,
    type,
  }));
};