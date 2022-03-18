import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { csvReaderReducer } from "features/CsvReader";
import { requestLoggerReducer } from "features/RequestLogger";
import { settingsReducer } from "./settingsSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    csvReader: csvReaderReducer,
    requestLogger: requestLoggerReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  // TODO: specify type
  any,
  Action<string>
>;
