import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addUsersThunk, requestStatusResetThunk } from "./csvReaderThunks";
import { CsvReaderState, ShallowFile } from "../types";
import { FEATURE_NAME } from "../constants";
import { UserLinkedToFile } from "shared/types";
import { getRequestLogItem } from "../utils";

const initialState: CsvReaderState = {
  files: [],
  users: [],
  status: "IDLE",
  requests: [],
};

export const csvReaderSlice = createSlice({
  name: FEATURE_NAME,
  initialState,
  reducers: {
    addFiles: (state, action: PayloadAction<ShallowFile[]>) => {
      state.files = action.payload;
    },
    resetFiles: (state) => {
      state.files = [];
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
    resetUsers: (state) => {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestStatusResetThunk.fulfilled, (state, action) => {
        state.status = "IDLE";
      })
      .addCase(addUsersThunk.pending, (state, action) => {
        state.status = "REQUEST";
      })
      .addCase(addUsersThunk.fulfilled, (state) => {
        const logItem = getRequestLogItem("success", state.users.length);
        state.requests.unshift(logItem);
        state.status = "SUCCESS";
        state.files = [];
      })
      .addCase(addUsersThunk.rejected, (state) => {
        const logItem = getRequestLogItem("failure", state.users.length);
        state.requests.push(logItem);
        state.status = "FAILURE";
      });
  },
});

const { actions, reducer } = csvReaderSlice;
export const { deleteFile, addFiles, addUsers, resetFiles, resetUsers } =
  actions;

export const csvReaderReducer = reducer;
