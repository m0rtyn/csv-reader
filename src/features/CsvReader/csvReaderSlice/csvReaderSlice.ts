import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CsvReaderState, ShallowFile } from "../types";
import { UserLinkedToFile } from "shared/types";
import { addUsersThunk, requestStatusResetAsync } from "./csvReaderThunks";
import { FEATURE_NAME } from "../constants";
import { format } from "date-fns";

const initialState: CsvReaderState = {
  files: [],
  users: [],
  status: "IDLE",
  requests: [],
};

const getCurrentTimestamp = () => format(new Date(), "yyyy/MM/dd HH:mm:ss")

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestStatusResetAsync.fulfilled, (state, action) => {
        state.status = "IDLE";
      })
      .addCase(addUsersThunk.pending, (state, action) => {
        state.status = "REQUEST";
      })
      .addCase(addUsersThunk.fulfilled, (state, { payload: response }) => {
        console.info("Success request: ", response);

        const logItem = {
          status: response.status,
          usersCount: state.users.length,
          timestamp: getCurrentTimestamp(),
        };
        state.requests.push(logItem);
        state.status = "SUCCESS";
        state.files = [];
      })
      .addCase(addUsersThunk.rejected, (state, { payload: response }) => {
        console.info("Failed request: ", response);

        const logItem = {
          status: "failed",
          usersCount: state.users.length,
          timestamp: getCurrentTimestamp()
        };
        state.requests.push(logItem);
        state.status = "FAILURE";
      });
  },
});

const { actions, reducer } = csvReaderSlice;
export const { deleteFile, addFiles, addUsers, resetFiles } = actions;

export const csvReaderReducer = reducer;
