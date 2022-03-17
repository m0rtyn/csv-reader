import { RootState } from "shared/store/store";

export const selectUsers = (state: RootState) => state.csvReader.users;
export const selectFiles = (state: RootState) => state.csvReader.files;
export const selectRequestStatus = (state: RootState) => state.csvReader.status;
