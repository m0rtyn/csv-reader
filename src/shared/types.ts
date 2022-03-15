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
