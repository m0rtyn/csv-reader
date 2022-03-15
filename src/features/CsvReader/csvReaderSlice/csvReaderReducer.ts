import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sendUsersToServer } from "../csvReaderAPI";
import { CsvReaderState, ShallowFile } from "../types";
import { UserLinkedToFile } from "@shared/types";
import { AppThunk } from "@shared/store";

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
    requestStatusFailure: (state, action: PayloadAction<Response>) => {
      console.info("Failed request: ", action.payload);
      state.status = "FAILURE";
    },
    requestStatusSuccess: (state, action: PayloadAction<Response>) => {
      console.info("Success request: ", action.payload);
      state.status = "SUCCESS";
      state.files = [];
    },
    requestStatusPending: (state) => {
      state.status = "REQUEST";
    },
    requestStatusReset: (state) => {
      setTimeout(() => {
        state.status = "IDLE";
      }, 3000);
    },
  },
});

export const csvReaderActions = csvReaderSlice.actions;
export const csvReaderReducer = csvReaderSlice.reducer;
