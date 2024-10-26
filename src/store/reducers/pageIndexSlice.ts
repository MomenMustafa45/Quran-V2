import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PageIndexState {
  value: number;
}

const initialState: PageIndexState = {
  value: 0,
};

export const pageIndexSlice = createSlice({
  name: "pageIndex",
  initialState,
  reducers: {
    pageIndexHandler: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pageIndexHandler } = pageIndexSlice.actions;

export default pageIndexSlice.reducer;
