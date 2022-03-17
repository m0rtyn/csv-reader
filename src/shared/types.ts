import { REQUEST_STATUS_TO_TYPE_MAP } from "./constants";

export interface User {
  name: string;
  age: number;
}

export interface UserLinkedToFile extends User {
  filename: string;
}

export interface ShallowResponse {
  status: number;
  statusText: string;
  type: string;
  url: string;
}

export type RequestStatus = keyof typeof REQUEST_STATUS_TO_TYPE_MAP;
