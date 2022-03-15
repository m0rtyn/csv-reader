import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@shared/store";
import { sendUsersToServer } from "../csvReaderAPI";

export const requestStatusResetAsync = createAsyncThunk(
  "csvReader/resetRequestStatus",
  async () =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
);

export const sendAndAddUsers = createAsyncThunk(
  "csvReader/sendAndAddUsers", async (_, thunkAPI) => {
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
});
