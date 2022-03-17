import { RequestStatus, UserLinkedToFile } from "shared/types";

export interface ShallowFile {
  name: string;
  type: string;
  size: number;
  lastModified: number;
}

export interface CsvReaderState {
  files: ShallowFile[];
  users: UserLinkedToFile[];
  status: RequestStatus;
}
