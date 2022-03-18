import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "shared/store/store";
import { FEATURE_NAME } from "../constants";
import { sendUsersToServer } from "../csvReaderAPI";

const requestStatusResetActionType =
  `${FEATURE_NAME}resetRequestStatus` as const;
const sendUsersActionType = `${FEATURE_NAME}sendUsers` as const;

export const requestStatusResetAsync = createAsyncThunk(
  requestStatusResetActionType,
  async () =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
);

export const addUsersThunk = createAsyncThunk(
  sendUsersActionType,
  async (_, thunkAPI): Promise<any> => {
    const {
      csvReader: { users },
    } = thunkAPI.getState() as RootState;

    const usernames = users.map((user) => user.name);
    const response = await sendUsersToServer({
      users: usernames,
    });

    thunkAPI.dispatch(requestStatusResetAsync());

    return response;
  }
);
