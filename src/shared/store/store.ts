import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { csvReaderReducer } from "features/CsvReader";
import { settingsReducer } from "./settingsSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    csvReader: csvReaderReducer,
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
