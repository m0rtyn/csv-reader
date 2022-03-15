import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sendUsersToServer } from "../csvReaderAPI";
import { ShallowFile } from "../types";
import { UserLinkedToFile } from "@shared/types";
import { AppThunk } from "@shared/store";

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
    requestFailure: (state, action: PayloadAction<unknown>) => {
      console.error(action.payload);
      state.status = "FAILURE";
    },
    requestSuccess: (state) => {
      state.status = "SUCCESS";
    },
    requestPending: (state) => {
      state.status = "REQUEST";
    },
  },
});

export const csvReaderActions = csvReaderSlice.actions;

const { requestPending, requestFailure, requestSuccess } = csvReaderActions;

// eslint-disable-next-line max-statements
export const sendAndAddUsers = (): AppThunk => async (dispatch, getState) => {
  const {
    csvReader: { users },
  } = getState();

  try {
    const usernames = users.map((user) => user.name);

    dispatch(requestPending());
    await sendUsersToServer({
      users: usernames,
    });
    dispatch(requestSuccess());
  } catch (e) {
    dispatch(requestFailure(e));
  }
};

export const csvReaderReducer = csvReaderSlice.reducer;