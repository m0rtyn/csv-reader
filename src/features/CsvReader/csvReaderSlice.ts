import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../shared/types";
import { RootState, AppThunk } from "../../shared/store";
import { sendUsersToServer } from "./csvReaderAPI";

export interface CsvReaderState {
  files: string[];
  users: User[];
  status: "IDLE" | "REQUEST" | "SUCCESS" | "FAILURE";
}

const initialState: CsvReaderState = {
  files: [],
  users: [],
  status: "IDLE",
};

// TODO: remake this action and add missing actions
// export const sendUsersAsync = createAsyncThunk(
//   'csvReader/sendUsers',
//   async (users: User[]) => {
//     const response = await sendUsersToServer(users.map(user => user.name));
//     return users;
//   }
// );

export const csvReaderSlice = createSlice({
  name: "csvReader",
  initialState,
  reducers: {
    addFiles: (state, action: PayloadAction<string[]>) => {
      state.files = action.payload;
    },
    addUsers: (state, action: PayloadAction<User[]>) => {
      state.users = [...state.users, ...action.payload];
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(sendUsersAsync.pending, (state) => {
  //       state.status = 'REQUEST';
  //     })
  //     .addCase(sendUsersAsync.fulfilled, (state, action) => {
  //       state.status = 'SUCCESS';

  //       state.users = action.payload;
  //     })
  //     .addCase(sendUsersAsync.rejected, (state) => {
  //       state.status = 'FAILURE';
  //     });
  // },
});

export const { addFiles, addUsers } = csvReaderSlice.actions;

export const sendAndAddUsers =
  (): AppThunk =>
  // eslint-disable-next-line max-statements
  async (dispatch, getState) => {
    const {
      csvReader: { users },
    } = getState();

    try {
      const usernames = users.map((user) => user.name);
      const payload = {
        users: usernames,
      };

      const response = await sendUsersToServer(payload);
    } catch (e) {
      console.error(e);
    }
  };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.csvReader.value)`
export const selectUsers = (state: RootState) => state.csvReader.users;
export const selectFiles = (state: RootState) => state.csvReader.files;

export default csvReaderSlice.reducer;
