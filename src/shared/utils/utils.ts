import {
  REQUEST_STATUS_TO_LABEL_MAP,
  REQUEST_STATUS_TO_TYPE_MAP,
} from "shared/constants";
import { RequestStatus } from "shared/types";

export const roundToFirstDecimal = (number: number) =>
  Math.round(number * 10) / 10;

export const getStyleTypeFromStatus = (status: RequestStatus) => {
  return REQUEST_STATUS_TO_TYPE_MAP[status] || "default";
};

export const getStatusText = (status: RequestStatus) => {
  return REQUEST_STATUS_TO_LABEL_MAP[status] || null;
};
