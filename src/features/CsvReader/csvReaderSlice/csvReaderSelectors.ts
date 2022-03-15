import { RootState } from "@shared/store";

export const selectUsers = (state: RootState) => state.csvReader.users;
export const selectFiles = (state: RootState) => state.csvReader.files;
export const selectStatus = (state: RootState) => state.csvReader.status;
