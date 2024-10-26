import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TextColorState {
  color: string;
}

const initialState: TextColorState = {
  color: "#98FF98",
};

export const textColorSlice = createSlice({
  name: "textColor",
  initialState,
  reducers: {
    setTextColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTextColor } = textColorSlice.actions;

export default textColorSlice.reducer;
