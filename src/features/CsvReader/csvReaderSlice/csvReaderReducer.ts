import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CsvReaderState, ShallowFile } from "../types";
import { UserLinkedToFile } from "@shared/types";
import { requestStatusResetAsync, sendAndAddUsers } from "./csvReaderThunks";

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestStatusResetAsync.fulfilled, (state, action) => {
        state.status = "IDLE";
      })
      .addCase(sendAndAddUsers.fulfilled, (state, { payload }) => {
        console.info("Success request: ", payload);
        state.status = "SUCCESS";
        state.files = [];
      })
      .addCase(sendAndAddUsers.pending, (state, action) => {
        state.status = "REQUEST";
      })
      .addCase(sendAndAddUsers.rejected, (state, action) => {
        console.info("Failed request: ", action.payload);
        state.status = "FAILURE";
      });
  },
});

export const { deleteFile, addFiles, addUsers } = csvReaderSlice.actions;

export const csvReaderReducer = csvReaderSlice.reducer;
