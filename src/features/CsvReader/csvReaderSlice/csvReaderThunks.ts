import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "shared/store/store";
import { FEATURE_NAME } from "../constants";
import { sendUsersToServer } from "../csvReaderAPI";
import { addUsers, resetUsers } from "./csvReaderSlice";

const addUsersActionType = `${FEATURE_NAME}/addUsers` as const;
const requestStatusResetActionType =
  `${FEATURE_NAME}/resetRequestStatus` as const;
const collectUsersFromTextsActionType =
  `${FEATURE_NAME}/collectUsersFromTexts` as const;

export const requestStatusResetThunk = createAsyncThunk(
  requestStatusResetActionType,
  async () =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
);

export const addUsersThunk = createAsyncThunk(
  addUsersActionType,
  async (_, thunkAPI): Promise<number> => {
    const {
      csvReader: { users },
    } = thunkAPI.getState() as RootState;

    const usernames = users.map((user) => user.name);
    const response = await sendUsersToServer({
      users: usernames,
    });

    thunkAPI.dispatch(requestStatusResetThunk());
    thunkAPI.dispatch(resetUsers());

    return response.status;
  }
);

export const collectUsersFromTextThunk = createAsyncThunk(
  collectUsersFromTextsActionType,
  ({ filename, progressEvent }: any, thunkAPI) => {
    const fileText = progressEvent.target.result as string;
    const rowsOfCSV = fileText.split("\n");
    const rowsWithoutHeader = rowsOfCSV.slice(1, rowsOfCSV.length);

    const newUsers = rowsWithoutHeader.map((row: string) => {
      const [name, ageString] = row.split(",");
      return {
        name,
        filename,
        age: Number(ageString),
      };
    });

    return thunkAPI.dispatch(addUsers(newUsers));
  }
);
