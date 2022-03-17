import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@shared/store";
import { sendUsersToServer } from "../csvReaderAPI";

const FEATURE_PREFIX = 'csvReader/'
const requestStatusResetActionType = `${FEATURE_PREFIX}resetRequestStatus` as const
const sendUsersActionType = `${FEATURE_PREFIX}sendUsers` as const

export const requestStatusResetAsync = createAsyncThunk(
  requestStatusResetActionType,
  async () =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
);

export const sendUsers = createAsyncThunk(
  sendUsersActionType,
  async (_, thunkAPI) => {
    const {
      csvReader: { users },
    } = thunkAPI.getState() as RootState;

    const usernames = users.map((user) => user.name);
    const response = await sendUsersToServer({
      users: usernames,
    });
    thunkAPI.dispatch(requestStatusResetAsync());
    console.info(response.statusText);

    return response;
  }
);
