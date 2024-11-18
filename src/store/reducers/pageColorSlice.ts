import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TextBgColorState {
  color: string;
}

const initialState: TextBgColorState = {
  color: "white",
};

export const pageColorSlice = createSlice({
  name: "pageColor",
  initialState,
  reducers: {
    setPageColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPageColor } = pageColorSlice.actions;

export default pageColorSlice.reducer;
