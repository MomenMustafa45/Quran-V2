import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TextBgColorState {
  color: string;
}

const initialState: TextBgColorState = {
  color: "",
};

export const textBgColorSlice = createSlice({
  name: "textBgColor",
  initialState,
  reducers: {
    setTextBgColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTextBgColor } = textBgColorSlice.actions;

export default textBgColorSlice.reducer;
