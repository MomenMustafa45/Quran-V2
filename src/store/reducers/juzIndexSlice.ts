import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface JuzIndexState {
  value: number;
  juzModalVisible: boolean;
}

const initialState: JuzIndexState = {
  value: 0,
  juzModalVisible: false,
};

export const juzIndexSlice = createSlice({
  name: "juzIndex",
  initialState,
  reducers: {
    juzIndexHandler: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    openJuzModal: (state) => {
      state.juzModalVisible = true;
    },
    closeJuzModal: (state) => {
      state.juzModalVisible = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { juzIndexHandler, openJuzModal, closeJuzModal } =
  juzIndexSlice.actions;

export default juzIndexSlice.reducer;
