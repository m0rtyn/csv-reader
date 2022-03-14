import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sendUsersToServer } from "./csvReaderAPI";
import { ShallowFile } from "./types";
import { UserLinkedToFile } from "@shared/types";
import { AppThunk, RootState } from "@shared/store";

export interface CsvReaderState {
  files: ShallowFile[];
  users: UserLinkedToFile[];
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
    addFiles: (state, action: PayloadAction<ShallowFile[]>) => {
      state.files = action.payload;
    },
    deleteFile: (state, action: PayloadAction<ShallowFile>) => {
      state.files = state.files.filter(
        (file) => file.name !== action.payload.name
      );
      state.users = state.users.filter(
        (user) => user.filename !== action.payload.name
      );
    },
    addUsers: (state, action: PayloadAction<UserLinkedToFile[]>) => {
      state.users = [...state.users, ...action.payload];
    },
  },
  // TODO: add request status changing
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

export const csvReaderActions = csvReaderSlice.actions;

export const sendAndAddUsers = (): AppThunk => async (dispatch, getState) => {
  const {
    csvReader: { users },
  } = getState();

  try {
    const usernames = users.map((user) => user.name);
    const payload = {
      users: usernames,
    };

    await sendUsersToServer(payload);
  } catch (e) {
    console.error(e);
  }
};

export const selectUsers = (state: RootState) => state.csvReader.users;
export const selectFiles = (state: RootState) => state.csvReader.files;

export default csvReaderSlice.reducer;
