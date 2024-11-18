import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PageIndexState {
  value: number;
  indexModalVisible: boolean;
}

const initialState: PageIndexState = {
  value: 0,
  indexModalVisible: false,
};

export const pageIndexSlice = createSlice({
  name: "pageIndex",
  initialState,
  reducers: {
    pageIndexHandler: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    openIndexModal: (state) => {
      state.indexModalVisible = true;
    },
    closeIndexModal: (state) => {
      state.indexModalVisible = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pageIndexHandler, openIndexModal, closeIndexModal } =
  pageIndexSlice.actions;

export default pageIndexSlice.reducer;
