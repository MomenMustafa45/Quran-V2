import { configureStore } from "@reduxjs/toolkit";
import pageIndexSlice from "./reducers/pageIndexSlice";
import surahIndexSlice from "./reducers/surahIndex";
import juzIndexSlice from "./reducers/juzIndexSlice";
import textColorSlice from "./reducers/textSoundColor";
import textBgColorSlice from "./reducers/textbgColor";
import pageColorSlice from "./reducers/pageColorSlice";
// ...

export const store = configureStore({
  reducer: {
    pageIndex: pageIndexSlice,
    surahIndex: surahIndexSlice,
    juzIndex: juzIndexSlice,
    textColor: textColorSlice,
    textBgColor: textBgColorSlice,
    pageColor: pageColorSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
