export const REQUEST_STATUS_TO_TYPE_MAP = {
  IDLE: "secondary" as const,
  REQUEST: "secondary" as const,
  SUCCESS: "success" as const,
  FAILURE: "warning" as const,
};

export const REQUEST_STATUS_TO_LABEL_MAP = {
  IDLE: null,
  REQUEST: "Request to server",
  FAILURE: "Request error, please repeat the action",
  SUCCESS: "Request was successfully sent",
};

export const TIMESTAMP_FORMAT = "yyyy/MM/dd HH:mm:ss";
