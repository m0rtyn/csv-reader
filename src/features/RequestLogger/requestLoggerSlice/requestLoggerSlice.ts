import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "shared/store";

const FEATURE_NAME = 'requestLogger'

export interface LogItem {
  status: string;
  timestamp: string;
  usersCount: number;
}

interface RequestLoggerState {
  requests: LogItem[];
}

const initialState: RequestLoggerState = {
  requests: []
};

export const requestLoggerSlice = createSlice({
  name: FEATURE_NAME,
  initialState,
  reducers: {
    addRequest: (state, action: PayloadAction<LogItem>) => {
      state.requests.push(action.payload)
    }
  },
});

const { actions, reducer } = requestLoggerSlice;
export const { addRequest } = actions;
export const selectRequests = (state: RootState) => state.requestLogger.requests;


export const requestLoggerReducer = reducer;
