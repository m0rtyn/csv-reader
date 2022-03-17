import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const settingsSlice = createSlice({
  name: "settings/",
  initialState: { themeType: "dark" as "dark" | "light" },
  reducers: {
    toggleTheme: (state) => {
      state.themeType = state.themeType === "dark" ? "light" : "dark";
    },
  },
});

export const selectThemeType = (state: RootState) => state.settings.themeType;
