export interface User {
  name: string;
  age: number;
}

export interface UserLinkedToFile extends User {
  filename: string;
}
