import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SurahIndexState {
  value: number;
  surahModalVisible: boolean;
}

const initialState: SurahIndexState = {
  value: 0,
  surahModalVisible: false,
};

export const surahIndexSlice = createSlice({
  name: "surahIndex",
  initialState,
  reducers: {
    surahIndexHandler: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    openSurahModal: (state) => {
      state.surahModalVisible = true;
    },
    closeSurahModal: (state) => {
      state.surahModalVisible = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { surahIndexHandler, closeSurahModal, openSurahModal } =
  surahIndexSlice.actions;

export default surahIndexSlice.reducer;
